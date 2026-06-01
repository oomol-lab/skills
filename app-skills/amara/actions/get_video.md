# Amara · `get_video`

Fetch a single Amara video by video ID.

- **Service**: `amara`
- **Action**: `get_video`
- **Action id**: `amara.get_video`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "get_video"
```

## Run

```bash
oo connector run "amara" --action "get_video" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
