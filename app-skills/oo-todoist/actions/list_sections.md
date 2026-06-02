# Todoist · `list_sections`

List active Todoist sections with optional project and cursor filters.

- **Service**: `todoist`
- **Action**: `list_sections`
- **Action id**: `todoist.list_sections`
- **Required scopes**: todoist.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "todoist" --action "list_sections"
```

## Run

```bash
oo connector run "todoist" --action "list_sections" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
