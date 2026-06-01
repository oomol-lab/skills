# Unsplash · `get_photo`

Fetch the detailed payload for a single Unsplash photo.

- **Service**: `unsplash`
- **Action**: `get_photo`
- **Action id**: `unsplash.get_photo`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "unsplash" --action "get_photo"
```

## Run

```bash
oo connector run "unsplash" --action "get_photo" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
