terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
    github = {
      source  = "integrations/github"
      version = "~> 6.0"
    }
  }
  required_version = "~> 1.10"
}


resource "aws_iam_role" "github_oidc" {
  name_prefix        = "gha-cicd-${var.iam_role_prefix}-"
  description        = "Used by GitHub Actions to assume a role in AWS for CI/CD purposes, for the Github repository ${var.owner}/${var.repo}."
  assume_role_policy = data.aws_iam_policy_document.github_oidc_assume_role.json
}

data "aws_iam_policy_document" "github_oidc_assume_role" {
  dynamic "statement" {
    for_each = [
      # For pushes to the target branches
      [for b in var.branches : "repo:${var.owner}/${var.repo}:ref:refs/heads/${b}"],
    ]

    content {
      actions = ["sts:AssumeRoleWithWebIdentity"]

      principals {
        type        = "Federated"
        identifiers = [var.github_oidc_provider_arn]
      }

      condition {
        test     = "StringEquals"
        variable = "token.actions.githubusercontent.com:aud"
        values   = ["sts.amazonaws.com"]
      }

      condition {
        test     = "StringEquals"
        variable = "token.actions.githubusercontent.com:sub"
        values   = statement.value
      }
    }
  }

}

# Permissions for the GitHub OIDC role to access the S3 state bucket
data "aws_iam_policy_document" "s3_state" {

  statement {
    effect      = "Allow"
    not_actions = ["s3:DeleteBucket"]
    resources = [
      "arn:aws:s3:::${var.s3_state_bucket}",
      "arn:aws:s3:::${var.s3_state_bucket}/*"
    ]
  }
}

resource "aws_iam_role_policy" "s3_state" {
  name_prefix = "s3-state-access-"
  role        = aws_iam_role.github_oidc.id
  policy      = data.aws_iam_policy_document.s3_state.json
}

resource "aws_iam_role_policy" "user_inline" {
  for_each = var.inline_policies

  name_prefix = each.key
  role        = aws_iam_role.github_oidc.id
  policy      = each.value
}

resource "aws_iam_role_policy_attachment" "user_managed" { # AWS Managed Policies
  for_each = var.managed_policies

  role       = aws_iam_role.github_oidc.id
  policy_arn = each.key
}
