# Discord Bot · `list_sticker_packs`

List public sticker packs.

- **Service**: `discordbot`
- **Action**: `list_sticker_packs`
- **Action id**: `discordbot.list_sticker_packs`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "list_sticker_packs"
```

## Run

```bash
oo connector run "discordbot" --action "list_sticker_packs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
