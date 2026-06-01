# Pexels · `collection_media`

Retrieve the photo and video items inside a Pexels collection, with optional type and sort filters.

- **Service**: `pexels`
- **Action**: `collection_media`
- **Action id**: `pexels.collection_media`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pexels" --action "collection_media"
```

## Run

```bash
oo connector run "pexels" --action "collection_media" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
