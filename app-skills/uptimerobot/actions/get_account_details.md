# UptimeRobot · `get_account_details`

Get account-level monitor usage and profile details from the connected UptimeRobot account.

- **Service**: `uptimerobot`
- **Action**: `get_account_details`
- **Action id**: `uptimerobot.get_account_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "uptimerobot" --action "get_account_details"
```

## Run

```bash
oo connector run "uptimerobot" --action "get_account_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
