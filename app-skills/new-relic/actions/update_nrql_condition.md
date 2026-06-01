# New Relic · `update_nrql_condition`

Update a static or baseline NRQL alert condition using the REST alerts API.

- **Service**: `new_relic`
- **Action**: `update_nrql_condition`
- **Action id**: `new_relic.update_nrql_condition`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "update_nrql_condition"
```

## Run

```bash
oo connector run "new_relic" --action "update_nrql_condition" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes New Relic state. Confirm the exact payload and intended effect with the user before running.
