# YouTube · `list_comments`

List YouTube comments by parent comment ID or comment IDs.

- **Service**: `youtube`
- **Action**: `list_comments`
- **Action id**: `youtube.list_comments`
- **Required scopes**: youtube.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "list_comments"
```

## Run

```bash
oo connector run "youtube" --action "list_comments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
