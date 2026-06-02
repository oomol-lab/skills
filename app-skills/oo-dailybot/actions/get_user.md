# Dailybot · `get_user`

Get a specific user from the authenticated Dailybot organization.

- **Service**: `dailybot`
- **Action**: `get_user`
- **Action id**: `dailybot.get_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dailybot" --action "get_user"
```

## Run

```bash
oo connector run "dailybot" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
