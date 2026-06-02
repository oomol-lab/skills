# Gemini · `get_videos_operation`

Fetch the current status for a Gemini Veo operation.

- **Service**: `gemini`
- **Action**: `get_videos_operation`
- **Action id**: `gemini.get_videos_operation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gemini" --action "get_videos_operation"
```

## Run

```bash
oo connector run "gemini" --action "get_videos_operation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
