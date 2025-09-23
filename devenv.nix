{
  pkgs,
  config,
  ...
}:

{
  cachix.enable = false;

  env.TF_CMD = "tofu";
  env.AWS_PROFILE = "prod";
  env.TF_PLUGIN_CACHE_DIR = "${builtins.getEnv "HOME"}/.tofu.d/plugin-cache";

  # https://devenv.sh/packages/
  packages = with pkgs; [
    awscli2
    opentofu
    tflint
    aws-sam-cli
  ];

  languages.python = {
    enable = true;
    directory = "./backend";
    package = pkgs.python313;
    uv.enable = true;
    uv.sync.enable = true;

    # Fixes uv sync not running when pyproject.toml changes
    uv.sync.arguments = [ ]; # https://github.com/cachix/devenv/pull/2038
  };

  languages.javascript = {
    enable = true;
    corepack.enable = true;
    pnpm.install.enable = true;
    directory = "./frontend";
  };

  enterShell = ''
    export TF_PLUGIN_CACHE_DIR=~/.tofu.d/plugin-cache
    mkdir -p "$TF_PLUGIN_CACHE_DIR"

    if ! aws sts get-caller-identity >/dev/null 2>&1; then
      aws sso login
    fi
    if [[ -z "$GITHUB_ACTIONS" ]] && ! gh auth status >/dev/null 2>&1; then
      gh auth login
    fi
    . ${config.env.DEVENV_STATE}/venv/bin/activate
  '';

  scripts =
    let
      mkScript =
        let
          name = "script";
        in
        cmd:
        ''${
          pkgs.writeShellApplication {
            inherit name;
            text = ''
              ${cmd}
            '';
          }
        }/bin/${name} "$@"'';
    in
    {
      tf.exec = mkScript ''
        set -euo pipefail
        cd "$DEVENV_ROOT/iac"

        cmd="$1"
        env="$2"
        export AWS_PROFILE="$env"

        s3_state_bucket="$(gh variable get "''${env^^}"_S3_STATE_BUCKET)"
        tofu_args=(
          -var "s3_state_bucket=''${s3_state_bucket}"
        )

        tofu init -reconfigure "''${tofu_args[@]}"
        tofu "$cmd" "''${tofu_args[@]}" "''${@:3}"
      '';

      up.exec = mkScript ''
        trap 'kill 0' INT TERM EXIT

        # Frontend
        (
          cd "$DEVENV_ROOT/frontend"
          pnpm dev 2>&1 | sed $'s/^/\033[34m[frontend]\033[0m /'
        ) &

        # Backend
        (
          cd "$DEVENV_ROOT/backend"
          fastapi dev 2>&1 | sed $'s/^/\033[32m[backend]\033[0m /'
        ) &

        wait
      '';
    };

  git-hooks.hooks =
    let
      mkBash =
        let
          name = "script";
        in
        cmd:
        ''${
          # Fixes issues with set -euo not being set in hooks with bash -c
          pkgs.writeShellApplication {
            inherit name;
            text = ''${cmd}'';
          }
        }/bin/${name} "$@"''; # Passthrough caller arguments
      pnpm = "${pkgs.pnpm}/bin/pnpm";
      tflint = "${pkgs.tflint}/bin/tflint";
      tofu = "${pkgs.opentofu}/bin/tofu";
    in
    {
      # Common
      trim-trailing-whitespace.enable = true;
      end-of-file-fixer.enable = true;
      check-yaml.enable = true; # Does not validate schema
      check-added-large-files.enable = true;
      check-case-conflicts.enable = true;
      shellcheck.enable = true;
      actionlint.enable = true;
      trufflehog.enable = true;
      check-terraform = {
        enable = true;
        pass_filenames = false;
        files = "\\.tf$";
        # Use .tflint.hcl in the root of the repo https://github.com/terraform-linters/tflint/blob/master/docs/user-guide/working-directory.md
        entry = mkBash ''${tflint} --init && ${tflint} --chdir=iac --recursive --config="$(realpath .tflint.hcl)"'';
      };
      update-terraform-lockfile = {
        enable = true;
        pass_filenames = false;
        files = "^iac/.*\.tf$";
        entry = mkBash ''cd iac && ${tofu} init -backend=false && ${tofu} validate'';
      };

      # Frontend
      pnpm-install = {
        enable = true;
        entry = mkBash ''cd frontend && ${pnpm} install --frozen-lockfile'';
        pass_filenames = false;
        files = "^frontend/(package.json|pnpm-lock.yaml)$";
      };
      biome.enable = true;
      # tsc: run on all files, since new errors could occur in untouched files
      tsc = {
        enable = true;
        entry = mkBash ''cd frontend && pnpx --package=typescript tsc --noEmit'';
        pass_filenames = false;
        files = "^frontend/src/.*\\.tsx?$";
      };
    };
}
