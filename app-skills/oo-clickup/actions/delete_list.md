# ClickUp · `delete_list`

Delete a ClickUp list by list ID.

- **Service**: `clickup`
- **Action**: `delete_list`
- **Action id**: `clickup.delete_list`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "delete_list"
```

## Run

```bash
oo connector run "clickup" --action "delete_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ClickUp data. Always confirm the target and get explicit user approval before running.
