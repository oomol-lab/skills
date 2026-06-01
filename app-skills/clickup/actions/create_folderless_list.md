# ClickUp · `create_folderless_list`

Create a ClickUp folderless list in a space.

- **Service**: `clickup`
- **Action**: `create_folderless_list`
- **Action id**: `clickup.create_folderless_list`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "create_folderless_list"
```

## Run

```bash
oo connector run "clickup" --action "create_folderless_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ClickUp state. Confirm the exact payload and intended effect with the user before running.
