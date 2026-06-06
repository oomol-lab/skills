# OOMOL Fusion API · `tinify_png_shrink_compress`

Compress PNG images with the Tinify API

- **Service**: `fusion-api`
- **Action**: `tinify_png_shrink_compress`
- **Action id**: `fusion-api.tinify_png_shrink_compress`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fusion-api" --action "tinify_png_shrink_compress"
```

## Run

```bash
oo connector run "fusion-api" --action "tinify_png_shrink_compress" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
