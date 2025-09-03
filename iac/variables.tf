variable "env" {
  description = "The environment to deploy into. Used as a prefix for Github Actions variables."
  type        = string
  default     = "dev"
}

variable "repository_name" {
  description = "The name of the GitHub repository."
  type        = string
}

variable "s3_state_bucket" {
  description = "The name of the S3 bucket used for the state files."
  type        = string
}
