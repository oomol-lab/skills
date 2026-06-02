# SunoAPI · `generate_music_cover`

Submit a SunoAPI music cover task and return the task identifier.

- **Service**: `sunoapi`
- **Action**: `generate_music_cover`
- **Action id**: `sunoapi.generate_music_cover`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sunoapi" --action "generate_music_cover"
```

## Run

```bash
oo connector run "sunoapi" --action "generate_music_cover" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
