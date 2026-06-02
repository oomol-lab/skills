# Discord Bot · `list_voice_regions`

List public voice regions.

- **Service**: `discordbot`
- **Action**: `list_voice_regions`
- **Action id**: `discordbot.list_voice_regions`
- **Required scopes**: discordbot.install

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "list_voice_regions"
```

## Run

```bash
oo connector run "discordbot" --action "list_voice_regions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
