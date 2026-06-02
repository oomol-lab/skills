# TinyPNG · `shrink_image`

Create a TinyPNG compressed image resource from a public URL or base64-encoded image bytes.

- **Service**: `tinypng`
- **Action**: `shrink_image`
- **Action id**: `tinypng.shrink_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tinypng" --action "shrink_image"
```

## Run

```bash
oo connector run "tinypng" --action "shrink_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
