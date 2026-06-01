# SmugMug · `get_image_sizes`

Summarize the usable image sizes for a SmugMug image from the official image size details payload.

- **Service**: `smugmug`
- **Action**: `get_image_sizes`
- **Action id**: `smugmug.get_image_sizes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "smugmug" --action "get_image_sizes"
```

## Run

```bash
oo connector run "smugmug" --action "get_image_sizes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
