variable "project_name" {
  description = "The name of the project. Used for tagging and naming resources."
  type        = string
}

variable "s3_state_bucket" {
  description = "The name of the S3 bucket used for the state files."
  type        = string
}
