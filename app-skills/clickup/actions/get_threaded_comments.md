# ClickUp · `get_threaded_comments`

Get the threaded replies on a ClickUp comment.

- **Service**: `clickup`
- **Action**: `get_threaded_comments`
- **Action id**: `clickup.get_threaded_comments`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "get_threaded_comments"
```

## Run

```bash
oo connector run "clickup" --action "get_threaded_comments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
