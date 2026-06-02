# ClickUp · `get_custom_task_types`

Get the ClickUp custom task types available on a workspace.

- **Service**: `clickup`
- **Action**: `get_custom_task_types`
- **Action id**: `clickup.get_custom_task_types`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "get_custom_task_types"
```

## Run

```bash
oo connector run "clickup" --action "get_custom_task_types" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
