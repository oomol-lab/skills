# Unsplash · `list_photos`

List the latest public photos from Unsplash.

- **Service**: `unsplash`
- **Action**: `list_photos`
- **Action id**: `unsplash.list_photos`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "unsplash" --action "list_photos"
```

## Run

```bash
oo connector run "unsplash" --action "list_photos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
