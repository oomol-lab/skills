# Pushover · `get_team_api_token`

Return the Team API token resolved from the action input or the connected credential metadata.

- **Service**: `pushover`
- **Action**: `get_team_api_token`
- **Action id**: `pushover.get_team_api_token`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "get_team_api_token"
```

## Run

```bash
oo connector run "pushover" --action "get_team_api_token" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
