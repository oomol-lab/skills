# New Relic · `create_alert_policy`

Create a New Relic alert policy using the REST alerts API.

- **Service**: `new_relic`
- **Action**: `create_alert_policy`
- **Action id**: `new_relic.create_alert_policy`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "create_alert_policy"
```

## Run

```bash
oo connector run "new_relic" --action "create_alert_policy" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes New Relic state. Confirm the exact payload and intended effect with the user before running.
