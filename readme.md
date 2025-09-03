# Chanel & Nicholas' Wedding Website

Our wedding RSVP website. Built with love and:

- NextJS
- Python
- OpenTofu
- AWS (Lambda, API Gateway)

## Development

Requirements:

- [Nix]
- [devenv]
- [direnv]
- AWS CLI configuration for the `dev` account

_Installation of pnpm/OpenTofu/NodeJS etc is not required - the environment will be set up automatically on entering the root directory._

Start the frontend:

```sh
cd frontend
pnpm dev
```

Pushing to `main` will trigger the deployment pipeline automatically.

## Deploying Infrastructure

[Ensure that the Github OIDC provider has been configured in AWS for the `dev` account.][oidc]

Ensure you have the necessary AWS CLI configuration for the `dev` account:

<details>
<summary>AWS CLI configuration</summary>

In `~/.aws/config`, add the following:

```ini
[profile dev]
sso_session = default
sso_account_id = 609697916464
sso_role_name = AdministratorAccess
region = ap-southeast-1

[sso-session default]
sso_start_url = https://d-9667b76e76.awsapps.com/start/#
sso_region = ap-southeast-1
sso_registration_scopes = sso:account:access
```

</details>

> [!IMPORTANT]
> If this is the first time you are deploying the infrastructure, run `./bootstrap.sh`.

Apply configuration:

```sh
tf apply
```

[Nix]: https://nixos.org/download.html
[devenv]: https://devenv.sh/
[direnv]: https://direnv.net/
[oidc]: https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-aws#adding-the-identity-provider-to-aws
