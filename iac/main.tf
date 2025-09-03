terraform {
  backend "s3" {
    bucket       = var.s3_state_bucket
    key          = "${var.repository_name}/terraform.tfstate"
    region       = "ap-southeast-1"
    use_lockfile = true
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.5"
    }
    github = {
      source  = "integrations/github"
      version = "~> 6.0"
    }
  }
  required_version = "~> 1.10"
}

provider "aws" {
  region = "ap-southeast-1"
  default_tags {
    tags = {
      Project = "infra"
    }
  }
}

provider "github" {
  owner = "nichara-labs"
}

module "s3_state_bucket" {
  source        = "./modules/s3_state"
  bucket_prefix = "${var.repository_name}-state-"
}
