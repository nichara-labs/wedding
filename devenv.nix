{
  pkgs,
  ...
}:

{
  cachix.enable = false;

  env.TF_CMD = "tofu";
  env.AWS_PROFILE = "dev";

  # https://devenv.sh/packages/
  packages = with pkgs; [
    awscli2
    opentofu
    tflint
  ];

  languages.python = {
    enable = true;
    package = pkgs.python313;
  };

  languages.javascript = {
    enable = true;
    corepack.enable = true;
    pnpm.install.enable = true;
    directory = "./frontend";
  };

  enterShell = ''
    if ! aws sts get-caller-identity >/dev/null 2>&1; then
      aws sso login
    fi
  '';

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
