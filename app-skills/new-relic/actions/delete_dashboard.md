# New Relic · `delete_dashboard`

Delete a New Relic dashboard by its entity GUID.

- **Service**: `new_relic`
- **Action**: `delete_dashboard`
- **Action id**: `new_relic.delete_dashboard`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "delete_dashboard"
```

## Run

```bash
oo connector run "new_relic" --action "delete_dashboard" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites New Relic data. Always confirm the target and get explicit user approval before running.
