# New Relic · `delete_alert_policy`

Delete a New Relic alert policy using the REST alerts API.

- **Service**: `new_relic`
- **Action**: `delete_alert_policy`
- **Action id**: `new_relic.delete_alert_policy`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "delete_alert_policy"
```

## Run

```bash
oo connector run "new_relic" --action "delete_alert_policy" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites New Relic data. Always confirm the target and get explicit user approval before running.
