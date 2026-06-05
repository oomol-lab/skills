# AltText.ai · `get_image`

Retrieve a single AltText.ai image record by asset ID.

- **Service**: `alt_text_ai`
- **Action**: `get_image`
- **Action id**: `alt_text_ai.get_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alt_text_ai" --action "get_image"
```

## Run

```bash
oo connector run "alt_text_ai" --action "get_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
