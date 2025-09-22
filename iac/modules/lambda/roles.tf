resource "aws_iam_role" "main" {
  name_prefix        = "${var.function_name}LambdaExecutionRole-"
  assume_role_policy = data.aws_iam_policy_document.assume_role.json
}

data "aws_iam_policy_document" "assume_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role_policy_attachment" "main" {
  role = aws_iam_role.main.id
  # Provides Cloudwatch Logs permissions
  # https://docs.aws.amazon.com/aws-managed-policy/latest/reference/AWSLambdaBasicExecutionRole.html
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}
resource "aws_iam_role_policy_attachment" "user_managed" { # AWS Managed Policies
  for_each = var.managed_policies

  role       = aws_iam_role.main.id
  policy_arn = each.key
}
