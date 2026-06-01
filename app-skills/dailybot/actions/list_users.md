# Dailybot · `list_users`

List users in the authenticated Dailybot organization.

- **Service**: `dailybot`
- **Action**: `list_users`
- **Action id**: `dailybot.list_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dailybot" --action "list_users"
```

## Run

```bash
oo connector run "dailybot" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
