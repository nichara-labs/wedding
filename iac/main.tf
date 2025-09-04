terraform {
  backend "s3" {
    bucket       = var.s3_state_bucket
    key          = "${var.project_name}/opentofu.tfstate"
    region       = "ap-southeast-1"
    use_lockfile = true
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.5"
    }
  }
  required_version = "~> 1.10"
}

provider "aws" {
  region = "ap-southeast-1"
  default_tags {
    tags = {
      Project = var.project_name
    }
  }
}
