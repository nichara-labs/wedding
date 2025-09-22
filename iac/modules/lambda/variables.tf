variable "function_name" {
  description = "The name of the Lambda function."
  type        = string
}

variable "managed_policies" {
  description = "List of managed policy ARNs to attach to the instance role."
  type        = set(string)
}

variable "image_uri" {
  description = "The URI of the Docker image in ECR to use for the Lambda function."
  type        = string
}

variable "allowed_origins" {
  description = "List of allowed origins for CORS configuration."
  type        = list(string)
}
