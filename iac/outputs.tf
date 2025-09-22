output "repository_name" {
  description = "The ECR repository name e.g. project-name/backend."
  value       = module.ecr.repository_name
}
