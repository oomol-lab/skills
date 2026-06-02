# Dailybot · `open_conversation`

Open a direct Dailybot conversation with a user.

- **Service**: `dailybot`
- **Action**: `open_conversation`
- **Action id**: `dailybot.open_conversation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dailybot" --action "open_conversation"
```

## Run

```bash
oo connector run "dailybot" --action "open_conversation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
