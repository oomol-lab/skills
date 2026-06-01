# Amara · `list_subtitle_languages`

List all subtitle language tracks for a single Amara video.

- **Service**: `amara`
- **Action**: `list_subtitle_languages`
- **Action id**: `amara.list_subtitle_languages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "list_subtitle_languages"
```

## Run

```bash
oo connector run "amara" --action "list_subtitle_languages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
