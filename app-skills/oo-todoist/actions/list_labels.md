# Todoist · `list_labels`

List Todoist labels with cursor pagination.

- **Service**: `todoist`
- **Action**: `list_labels`
- **Action id**: `todoist.list_labels`
- **Required scopes**: todoist.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "todoist" --action "list_labels"
```

## Run

```bash
oo connector run "todoist" --action "list_labels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
