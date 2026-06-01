# ClickUp · `create_list_from_template`

Create a ClickUp list from a folder list template.

- **Service**: `clickup`
- **Action**: `create_list_from_template`
- **Action id**: `clickup.create_list_from_template`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "create_list_from_template"
```

## Run

```bash
oo connector run "clickup" --action "create_list_from_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ClickUp state. Confirm the exact payload and intended effect with the user before running.
