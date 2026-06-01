# Docker Hub · `list_org_access_tokens`

List Docker Hub organization access tokens for an organization.

- **Service**: `docker_hub`
- **Action**: `list_org_access_tokens`
- **Action id**: `docker_hub.list_org_access_tokens`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docker_hub" --action "list_org_access_tokens"
```

## Run

```bash
oo connector run "docker_hub" --action "list_org_access_tokens" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
