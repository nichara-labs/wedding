terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.8"
    }
  }
  required_version = "~> 1.10"
}

resource "aws_lambda_function" "main" {
  function_name = var.function_name
  role          = aws_iam_role.main.arn
  package_type  = "Image"
  image_uri     = var.image_uri

  image_config {}

  memory_size   = 256
  timeout       = 10
  architectures = ["arm64"]
}

resource "aws_lambda_function_url" "main" {
  function_name      = aws_lambda_function.main.function_name
  authorization_type = "NONE"

  cors {
    allow_origins = var.allowed_origins
  }
}
