# HeyGen · `get_avatar`

Retrieve details for a single HeyGen avatar by avatar ID.

- **Service**: `heygen`
- **Action**: `get_avatar`
- **Action id**: `heygen.get_avatar`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heygen" --action "get_avatar"
```

## Run

```bash
oo connector run "heygen" --action "get_avatar" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
