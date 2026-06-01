# Pexels · `curated_photos`

Retrieve the current curated photo feed from Pexels with pagination controls.

- **Service**: `pexels`
- **Action**: `curated_photos`
- **Action id**: `pexels.curated_photos`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pexels" --action "curated_photos"
```

## Run

```bash
oo connector run "pexels" --action "curated_photos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
