# Monday · `set_item_description_content`

Replace a Monday item description using markdown content.

- **Service**: `monday`
- **Action**: `set_item_description_content`
- **Action id**: `monday.set_item_description_content`
- **Required scopes**: boards:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "set_item_description_content"
```

## Run

```bash
oo connector run "monday" --action "set_item_description_content" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Monday state. Confirm the exact payload and intended effect with the user before running.
