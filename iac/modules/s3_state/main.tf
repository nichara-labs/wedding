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

resource "aws_s3_bucket" "state" {
  bucket_prefix = var.bucket_prefix
}

resource "aws_s3_bucket_versioning" "state" {
  bucket = aws_s3_bucket.state.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_lifecycle_configuration" "state" {
  depends_on = [aws_s3_bucket_versioning.state]
  bucket     = aws_s3_bucket.state.id
  rule {
    id = "limit-noncurrent-versions"
    filter {}
    noncurrent_version_expiration {
      noncurrent_days           = 30
      newer_noncurrent_versions = 10
    }
    status = "Enabled"
  }
}
