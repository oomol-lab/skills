# New Relic · `delete_nrql_condition`

Delete a New Relic NRQL alert condition using the REST alerts API.

- **Service**: `new_relic`
- **Action**: `delete_nrql_condition`
- **Action id**: `new_relic.delete_nrql_condition`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "delete_nrql_condition"
```

## Run

```bash
oo connector run "new_relic" --action "delete_nrql_condition" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites New Relic data. Always confirm the target and get explicit user approval before running.
