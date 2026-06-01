# UptimeRobot · `list_monitors`

List monitors available in the connected UptimeRobot account.

- **Service**: `uptimerobot`
- **Action**: `list_monitors`
- **Action id**: `uptimerobot.list_monitors`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "uptimerobot" --action "list_monitors"
```

## Run

```bash
oo connector run "uptimerobot" --action "list_monitors" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
