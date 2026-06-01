# Alibaba Cloud STS · `get_federated_credentials`

Return Alibaba Cloud STS temporary credentials from the connected OOMOL OIDC federation configuration.

- **Service**: `aliyun_sts`
- **Action**: `get_federated_credentials`
- **Action id**: `aliyun_sts.get_federated_credentials`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aliyun_sts" --action "get_federated_credentials"
```

## Run

```bash
oo connector run "aliyun_sts" --action "get_federated_credentials" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
