# Dailybot · `get_team`

Get a specific team from the authenticated Dailybot organization.

- **Service**: `dailybot`
- **Action**: `get_team`
- **Action id**: `dailybot.get_team`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dailybot" --action "get_team"
```

## Run

```bash
oo connector run "dailybot" --action "get_team" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
