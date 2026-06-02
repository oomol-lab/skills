# Pushover · `get_app_token`

Return the application API token resolved from the action input or the connected credential.

- **Service**: `pushover`
- **Action**: `get_app_token`
- **Action id**: `pushover.get_app_token`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "get_app_token"
```

## Run

```bash
oo connector run "pushover" --action "get_app_token" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
