# New Relic · `list_deployments`

List deployment markers for a legacy APM application by using the REST v2 deployments API.

- **Service**: `new_relic`
- **Action**: `list_deployments`
- **Action id**: `new_relic.list_deployments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "list_deployments"
```

## Run

```bash
oo connector run "new_relic" --action "list_deployments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
