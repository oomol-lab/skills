# UptimeRobot · `delete_monitor`

Delete a monitor from the connected UptimeRobot account.

- **Service**: `uptimerobot`
- **Action**: `delete_monitor`
- **Action id**: `uptimerobot.delete_monitor`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "uptimerobot" --action "delete_monitor"
```

## Run

```bash
oo connector run "uptimerobot" --action "delete_monitor" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites UptimeRobot data. Always confirm the target and get explicit user approval before running.
