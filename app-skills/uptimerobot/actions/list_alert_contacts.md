# UptimeRobot · `list_alert_contacts`

List the alert contacts configured in the connected UptimeRobot account.

- **Service**: `uptimerobot`
- **Action**: `list_alert_contacts`
- **Action id**: `uptimerobot.list_alert_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "uptimerobot" --action "list_alert_contacts"
```

## Run

```bash
oo connector run "uptimerobot" --action "list_alert_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
