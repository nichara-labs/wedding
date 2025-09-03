#!/usr/bin/env bash

set -euo pipefail

# Sets up the initial S3 state bucket for each environment.

export TF_IN_AUTOMATION=1

init() {
  env=$1
  rm -f terraform.tfstate* .terraform.lock.hcl override.tf

  export AWS_PROFILE="$env"
  cat <<EOF > override.tf
    terraform {
      backend "local" {}
    }
EOF
  # Initialize locally first
  tofu init -reconfigure

  # Create the S3 state bucket
  tofu apply \
  -var env="$env" \
  -var s3_state_bucket=bootstrap \
  -auto-approve

  # Migrate local backend to the S3 bucket created above
  rm override.tf

  # Unfortunately there is no way to send 'yes' her so it has to be done manually
  tofu init -migrate-state \
  -var env="$env" \
  -var s3_state_bucket="$(gh variable get "${env^^}"_S3_STATE_BUCKET)"
}

cd iac/
init dev
