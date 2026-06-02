# ElevenLabs · `get_generated_items`

List generated ElevenLabs history items with pagination and optional voice filtering.

- **Service**: `elevenlabs`
- **Action**: `get_generated_items`
- **Action id**: `elevenlabs.get_generated_items`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elevenlabs" --action "get_generated_items"
```

## Run

```bash
oo connector run "elevenlabs" --action "get_generated_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
