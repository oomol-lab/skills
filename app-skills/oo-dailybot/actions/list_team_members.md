# Dailybot · `list_team_members`

List members of a specific Dailybot team.

- **Service**: `dailybot`
- **Action**: `list_team_members`
- **Action id**: `dailybot.list_team_members`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dailybot" --action "list_team_members"
```

## Run

```bash
oo connector run "dailybot" --action "list_team_members" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
