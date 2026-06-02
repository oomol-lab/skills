# Pexels · `get_photo`

Retrieve the full metadata for a single Pexels photo by photo id.

- **Service**: `pexels`
- **Action**: `get_photo`
- **Action id**: `pexels.get_photo`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pexels" --action "get_photo"
```

## Run

```bash
oo connector run "pexels" --action "get_photo" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
