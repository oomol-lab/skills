# ClickUp · `set_custom_field_value`

Set a ClickUp custom field value on a task.

- **Service**: `clickup`
- **Action**: `set_custom_field_value`
- **Action id**: `clickup.set_custom_field_value`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "set_custom_field_value"
```

## Run

```bash
oo connector run "clickup" --action "set_custom_field_value" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ClickUp state. Confirm the exact payload and intended effect with the user before running.
