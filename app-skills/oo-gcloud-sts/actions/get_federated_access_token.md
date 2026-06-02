# Google Cloud STS · `get_federated_access_token`

Exchange the connected OOMOL OIDC token with Google Cloud Workload Identity Federation and return a Google Cloud access token.

- **Service**: `gcloud_sts`
- **Action**: `get_federated_access_token`
- **Action id**: `gcloud_sts.get_federated_access_token`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gcloud_sts" --action "get_federated_access_token"
```

## Run

```bash
oo connector run "gcloud_sts" --action "get_federated_access_token" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
