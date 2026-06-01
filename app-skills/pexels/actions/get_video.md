# Pexels · `get_video`

Retrieve the full metadata for a single Pexels video by video id.

- **Service**: `pexels`
- **Action**: `get_video`
- **Action id**: `pexels.get_video`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pexels" --action "get_video"
```

## Run

```bash
oo connector run "pexels" --action "get_video" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
