# Gemini · `generate_image`

Generate an image with Gemini and return a transit URL.

- **Service**: `gemini`
- **Action**: `generate_image`
- **Action id**: `gemini.generate_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gemini" --action "generate_image"
```

## Run

```bash
oo connector run "gemini" --action "generate_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
