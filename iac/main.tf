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


module "ecr" {
  source    = "./modules/ecr"
  repo_name = "${var.project_name}/backend"
}

data "aws_ssm_parameter" "password" {
  name            = "/${var.project_name}/password"
  with_decryption = true
}

module "lambda" {
  source        = "./modules/lambda"
  function_name = var.project_name
  image_uri     = var.image_uri
  environment_variables = {
    PASSWORD = data.aws_ssm_parameter.password.value

  }
  managed_policies = [
    "arn:aws:iam::aws:policy/AmazonSESFullAccess",
    "arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess_v2"
  ]
}
