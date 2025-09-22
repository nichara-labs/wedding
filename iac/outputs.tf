output "repository_name" {
  description = "The ECR repository name e.g. project-name/backend."
  value       = module.ecr.repository_name
}

output "function_url" {
  description = "The Lambda function URL."
  value       = module.lambda.function_url
}
