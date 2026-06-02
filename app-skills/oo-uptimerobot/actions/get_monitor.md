# UptimeRobot · `get_monitor`

Get the full configuration and current status of a single UptimeRobot monitor.

- **Service**: `uptimerobot`
- **Action**: `get_monitor`
- **Action id**: `uptimerobot.get_monitor`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "uptimerobot" --action "get_monitor"
```

## Run

```bash
oo connector run "uptimerobot" --action "get_monitor" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
