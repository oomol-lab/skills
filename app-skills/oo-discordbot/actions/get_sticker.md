# Discord Bot · `get_sticker`

Get a sticker by id.

- **Service**: `discordbot`
- **Action**: `get_sticker`
- **Action id**: `discordbot.get_sticker`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_sticker"
```

## Run

```bash
oo connector run "discordbot" --action "get_sticker" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
