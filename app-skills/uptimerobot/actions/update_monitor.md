# UptimeRobot · `update_monitor`

Update an existing monitor in the connected UptimeRobot account.

- **Service**: `uptimerobot`
- **Action**: `update_monitor`
- **Action id**: `uptimerobot.update_monitor`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "uptimerobot" --action "update_monitor"
```

## Run

```bash
oo connector run "uptimerobot" --action "update_monitor" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes UptimeRobot state. Confirm the exact payload and intended effect with the user before running.
