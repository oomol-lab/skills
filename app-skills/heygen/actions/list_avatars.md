# HeyGen · `list_avatars`

List HeyGen avatars and talking photos available for video generation.

- **Service**: `heygen`
- **Action**: `list_avatars`
- **Action id**: `heygen.list_avatars`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heygen" --action "list_avatars"
```

## Run

```bash
oo connector run "heygen" --action "list_avatars" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
