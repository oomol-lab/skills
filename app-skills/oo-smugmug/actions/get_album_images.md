# SmugMug · `get_album_images`

List the images contained in a SmugMug album.

- **Service**: `smugmug`
- **Action**: `get_album_images`
- **Action id**: `smugmug.get_album_images`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "smugmug" --action "get_album_images"
```

## Run

```bash
oo connector run "smugmug" --action "get_album_images" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
