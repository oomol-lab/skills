# Mopinion · `list_deployments`

List Mopinion deployments for the connected account.

- **Service**: `mopinion`
- **Action**: `list_deployments`
- **Action id**: `mopinion.list_deployments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mopinion" --action "list_deployments"
```

## Run

```bash
oo connector run "mopinion" --action "list_deployments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
