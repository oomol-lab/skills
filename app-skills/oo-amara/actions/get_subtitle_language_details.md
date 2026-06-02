# Amara · `get_subtitle_language_details`

Fetch a single subtitle language track for an Amara video.

- **Service**: `amara`
- **Action**: `get_subtitle_language_details`
- **Action id**: `amara.get_subtitle_language_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "get_subtitle_language_details"
```

## Run

```bash
oo connector run "amara" --action "get_subtitle_language_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
