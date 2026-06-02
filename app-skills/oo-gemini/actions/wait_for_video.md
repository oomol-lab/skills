# Gemini · `wait_for_video`

Poll a Gemini Veo operation and return the finished video via transit URL.

- **Service**: `gemini`
- **Action**: `wait_for_video`
- **Action id**: `gemini.wait_for_video`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gemini" --action "wait_for_video"
```

## Run

```bash
oo connector run "gemini" --action "wait_for_video" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
