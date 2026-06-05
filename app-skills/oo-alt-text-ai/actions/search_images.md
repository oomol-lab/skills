# AltText.ai · `search_images`

Search the AltText.ai image library by URL, asset ID, or alt text content.

- **Service**: `alt_text_ai`
- **Action**: `search_images`
- **Action id**: `alt_text_ai.search_images`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alt_text_ai" --action "search_images"
```

## Run

```bash
oo connector run "alt_text_ai" --action "search_images" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
