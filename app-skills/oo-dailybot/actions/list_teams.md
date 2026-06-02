# Dailybot · `list_teams`

List teams in the authenticated Dailybot organization.

- **Service**: `dailybot`
- **Action**: `list_teams`
- **Action id**: `dailybot.list_teams`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dailybot" --action "list_teams"
```

## Run

```bash
oo connector run "dailybot" --action "list_teams" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
