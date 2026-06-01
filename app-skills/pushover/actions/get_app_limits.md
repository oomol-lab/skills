# Pushover · `get_app_limits`

Get the current monthly message limit, remaining messages, and reset time for the connected Pushover application.

- **Service**: `pushover`
- **Action**: `get_app_limits`
- **Action id**: `pushover.get_app_limits`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "get_app_limits"
```

## Run

```bash
oo connector run "pushover" --action "get_app_limits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
