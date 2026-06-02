# ClickUp · `remove_custom_field_value`

Remove a ClickUp custom field value from a task.

- **Service**: `clickup`
- **Action**: `remove_custom_field_value`
- **Action id**: `clickup.remove_custom_field_value`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "remove_custom_field_value"
```

## Run

```bash
oo connector run "clickup" --action "remove_custom_field_value" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ClickUp data. Always confirm the target and get explicit user approval before running.
