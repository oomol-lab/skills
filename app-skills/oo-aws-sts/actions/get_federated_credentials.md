# AWS STS · `get_federated_credentials`

Return AWS STS temporary credentials from the connected OOMOL OIDC federation configuration.

- **Service**: `aws_sts`
- **Action**: `get_federated_credentials`
- **Action id**: `aws_sts.get_federated_credentials`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aws_sts" --action "get_federated_credentials"
```

## Run

```bash
oo connector run "aws_sts" --action "get_federated_credentials" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
