variable "iam_role_prefix" {
  description = <<-EOT
  Prefix used for the IAM role. This should generally be the name of the GitHub repository or the project.

  This is further prefixed with `gha-cicd` and appended with a random suffix.

  E.g. `infra` -> `gha-cicd-infra-<random_suffix>`
  EOT
  type        = string
}

variable "s3_state_bucket" {
  description = "The S3 bucket used for storing Terraform state files. This is used to grant CRUD permissions to the GitHub OIDC role for the bucket."
  type        = string
}

variable "github_oidc_provider_arn" {
  description = "ARN of the GitHub OIDC provider."
  type        = string
}

variable "owner" {
  description = "The GitHub repository organization/user, e.g. `nichara-labs`."
  type        = string
  default     = "nichara-labs"
}

variable "repo" {
  description = "The GitHub repository under the organization/user name where the OIDC role will be used, e.g. `infra`."
  type        = string
}

variable "branches" {
  description = "Branches allowed to assume the role (including PRs to those branches, via the `pull_request` event)."

  type    = set(string)
  default = ["main"]
}

variable "managed_policies" {
  description = "List of managed policy ARNs to attach to the GitHub OIDC role. See https://docs.aws.amazon.com/aws-managed-policy/latest/reference/policy-list.html"
  type        = set(string)
  default     = []
}

variable "inline_policies" {
  description = <<-EOT
  "Map of inline policy names to policy documents to attach to the GitHub OIDC role. You can use `aws_iam_policy_document.json` for the policy document.

  See https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html"
  EOT
  type        = map(string)
  default     = {}
}
