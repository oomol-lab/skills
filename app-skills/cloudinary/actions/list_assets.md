# Cloudinary · `list_assets`

List uploaded Cloudinary assets of one resource type with optional prefix filtering and cursor pagination.

- **Service**: `cloudinary`
- **Action**: `list_assets`
- **Action id**: `cloudinary.list_assets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudinary" --action "list_assets"
```

## Run

```bash
oo connector run "cloudinary" --action "list_assets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
