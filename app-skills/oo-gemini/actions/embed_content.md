# Gemini · `embed_content`

Generate Gemini embeddings for text content.

- **Service**: `gemini`
- **Action**: `embed_content`
- **Action id**: `gemini.embed_content`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gemini" --action "embed_content"
```

## Run

```bash
oo connector run "gemini" --action "embed_content" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
