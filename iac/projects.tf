resource "github_actions_variable" "s3_state_bucket" {
  repository    = var.repository_name
  variable_name = "${upper(var.env)}_S3_STATE_BUCKET"
  value         = module.s3_state_bucket.name
}

resource "github_actions_variable" "iam_role" {
  repository    = var.repository_name
  variable_name = "${upper(var.env)}_GHA_IAM_ROLE"
  value         = module.project_oidc_role.arn
}

data "aws_iam_openid_connect_provider" "github" {
  url = "https://token.actions.githubusercontent.com"
}

# Per-project, per-environment OIDC roles for Github Actions
module "project_oidc_role" {
  source                   = "./modules/github_oidc"
  github_oidc_provider_arn = data.aws_iam_openid_connect_provider.github.arn
  iam_role_prefix          = var.repository_name
  repo                     = var.repository_name
  s3_state_bucket          = module.s3_state_bucket.name
  managed_policies = [
    "arn:aws:iam::aws:policy/PowerUserAccess",
    "arn:aws:iam::aws:policy/IAMFullAccess"
  ]
}
