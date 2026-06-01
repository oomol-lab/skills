# v0 · `find_deployments`

List deployments for a specific project, chat, and version combination.

- **Service**: `v0`
- **Action**: `find_deployments`
- **Action id**: `v0.find_deployments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "find_deployments"
```

## Run

```bash
oo connector run "v0" --action "find_deployments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
