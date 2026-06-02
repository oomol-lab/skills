# Amara · `list_videos`

List Amara videos with optional filters, sorting, and pagination controls.

- **Service**: `amara`
- **Action**: `list_videos`
- **Action id**: `amara.list_videos`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "list_videos"
```

## Run

```bash
oo connector run "amara" --action "list_videos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
