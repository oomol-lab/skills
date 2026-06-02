# New Relic · `list_nrql_conditions`

List NRQL alert conditions for a specific alert policy using the REST alerts API.

- **Service**: `new_relic`
- **Action**: `list_nrql_conditions`
- **Action id**: `new_relic.list_nrql_conditions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "list_nrql_conditions"
```

## Run

```bash
oo connector run "new_relic" --action "list_nrql_conditions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
