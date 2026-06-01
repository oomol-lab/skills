# Todoist · `list_comments`

List Todoist comments for exactly one task or project.

- **Service**: `todoist`
- **Action**: `list_comments`
- **Action id**: `todoist.list_comments`
- **Required scopes**: todoist.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "todoist" --action "list_comments"
```

## Run

```bash
oo connector run "todoist" --action "list_comments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
