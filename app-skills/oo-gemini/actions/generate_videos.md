# Gemini · `generate_videos`

Start a Gemini Veo video generation operation.

- **Service**: `gemini`
- **Action**: `generate_videos`
- **Action id**: `gemini.generate_videos`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gemini" --action "generate_videos"
```

## Run

```bash
oo connector run "gemini" --action "generate_videos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
