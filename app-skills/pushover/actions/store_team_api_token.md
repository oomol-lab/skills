# Pushover · `store_team_api_token`

Validate a Pushover Team API token for later use. Persist the token through the provider connection extra field when needed.

- **Service**: `pushover`
- **Action**: `store_team_api_token`
- **Action id**: `pushover.store_team_api_token`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "store_team_api_token"
```

## Run

```bash
oo connector run "pushover" --action "store_team_api_token" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
