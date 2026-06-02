# Gemini · `generate_content`

Generate text or speech audio with Gemini models.

- **Service**: `gemini`
- **Action**: `generate_content`
- **Action id**: `gemini.generate_content`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gemini" --action "generate_content"
```

## Run

```bash
oo connector run "gemini" --action "generate_content" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
