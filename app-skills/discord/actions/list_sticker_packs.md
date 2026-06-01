# Discord · `list_sticker_packs`

List Discord Nitro sticker packs.

- **Service**: `discord`
- **Action**: `list_sticker_packs`
- **Action id**: `discord.list_sticker_packs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discord" --action "list_sticker_packs"
```

## Run

```bash
oo connector run "discord" --action "list_sticker_packs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
