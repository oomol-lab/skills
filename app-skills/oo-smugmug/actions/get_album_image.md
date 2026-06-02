# SmugMug · `get_album_image`

Retrieve a specific image within a SmugMug album context.

- **Service**: `smugmug`
- **Action**: `get_album_image`
- **Action id**: `smugmug.get_album_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "smugmug" --action "get_album_image"
```

## Run

```bash
oo connector run "smugmug" --action "get_album_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
