# ClickUp · `get_task_templates`

Get the ClickUp task templates available in a workspace.

- **Service**: `clickup`
- **Action**: `get_task_templates`
- **Action id**: `clickup.get_task_templates`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "get_task_templates"
```

## Run

```bash
oo connector run "clickup" --action "get_task_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
