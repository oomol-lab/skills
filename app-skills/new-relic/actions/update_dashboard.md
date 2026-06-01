# New Relic · `update_dashboard`

Update a New Relic dashboard by GUID, replacing the dashboard configuration with the supplied pages and widgets.

- **Service**: `new_relic`
- **Action**: `update_dashboard`
- **Action id**: `new_relic.update_dashboard`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "update_dashboard"
```

## Run

```bash
oo connector run "new_relic" --action "update_dashboard" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes New Relic state. Confirm the exact payload and intended effect with the user before running.
