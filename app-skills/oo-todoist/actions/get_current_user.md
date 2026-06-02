# Todoist · `get_current_user`

Retrieve the current Todoist user profile and plan metadata.

- **Service**: `todoist`
- **Action**: `get_current_user`
- **Action id**: `todoist.get_current_user`
- **Required scopes**: todoist.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "todoist" --action "get_current_user"
```

## Run

```bash
oo connector run "todoist" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
