# ClickUp · `delete_comment`

Delete a ClickUp comment by comment ID.

- **Service**: `clickup`
- **Action**: `delete_comment`
- **Action id**: `clickup.delete_comment`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "delete_comment"
```

## Run

```bash
oo connector run "clickup" --action "delete_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ClickUp data. Always confirm the target and get explicit user approval before running.
