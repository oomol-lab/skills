# Claid AI · `get_edit_task`

Poll one Claid async image editing task by ID and return its current status plus the finished result when available.

- **Service**: `claid_ai`
- **Action**: `get_edit_task`
- **Action id**: `claid_ai.get_edit_task`
- **Required scopes**: image_editing

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "claid_ai" --action "get_edit_task"
```

## Run

```bash
oo connector run "claid_ai" --action "get_edit_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Claid AI state. Confirm the exact payload and intended effect with the user before running.
