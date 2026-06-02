# Cincopa · `list_gallery_items`

List items from one Cincopa gallery by FID.

- **Service**: `cincopa`
- **Action**: `list_gallery_items`
- **Action id**: `cincopa.list_gallery_items`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cincopa" --action "list_gallery_items"
```

## Run

```bash
oo connector run "cincopa" --action "list_gallery_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
