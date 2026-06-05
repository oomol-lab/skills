# AltText.ai · `list_images`

List image records in the AltText.ai library with optional URL filtering.

- **Service**: `alt_text_ai`
- **Action**: `list_images`
- **Action id**: `alt_text_ai.list_images`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alt_text_ai" --action "list_images"
```

## Run

```bash
oo connector run "alt_text_ai" --action "list_images" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
