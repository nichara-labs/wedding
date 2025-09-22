variable "project_name" {
  description = "The name of the project. Used for tagging and naming resources."
  type        = string
}

variable "s3_state_bucket" {
  description = "The name of the S3 bucket used for the state files."
  type        = string
}

variable "image_uri" {
  description = "The URI of the Docker image in ECR to use for the Lambda function."
  type        = string
  default     = "placeholder"
}

variable "allowed_origins" {
  description = "List of allowed origins for the lambda backend."
  type        = list(string)
}
