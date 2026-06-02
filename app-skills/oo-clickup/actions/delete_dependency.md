# ClickUp · `delete_dependency`

Delete a ClickUp dependency relationship from a task.

- **Service**: `clickup`
- **Action**: `delete_dependency`
- **Action id**: `clickup.delete_dependency`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "delete_dependency"
```

## Run

```bash
oo connector run "clickup" --action "delete_dependency" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ClickUp data. Always confirm the target and get explicit user approval before running.
