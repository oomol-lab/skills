# Cloudinary · `get_asset`

Fetch one Cloudinary asset by immutable asset ID and return the normalized asset record.

- **Service**: `cloudinary`
- **Action**: `get_asset`
- **Action id**: `cloudinary.get_asset`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudinary" --action "get_asset"
```

## Run

```bash
oo connector run "cloudinary" --action "get_asset" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
