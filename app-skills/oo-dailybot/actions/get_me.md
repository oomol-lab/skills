# Dailybot · `get_me`

Get the authenticated Dailybot user context and linked organization.

- **Service**: `dailybot`
- **Action**: `get_me`
- **Action id**: `dailybot.get_me`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dailybot" --action "get_me"
```

## Run

```bash
oo connector run "dailybot" --action "get_me" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
