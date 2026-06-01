# SmugMug · `get_image_size_details`

Retrieve the full SmugMug image size details payload for an image.

- **Service**: `smugmug`
- **Action**: `get_image_size_details`
- **Action id**: `smugmug.get_image_size_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "smugmug" --action "get_image_size_details"
```

## Run

```bash
oo connector run "smugmug" --action "get_image_size_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
