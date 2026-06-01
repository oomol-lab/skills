# Todoist · `get_project`

Get a Todoist project by project ID.

- **Service**: `todoist`
- **Action**: `get_project`
- **Action id**: `todoist.get_project`
- **Required scopes**: todoist.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "todoist" --action "get_project"
```

## Run

```bash
oo connector run "todoist" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
