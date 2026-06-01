# Google Docs · `update_table_row_style`

Update the style of a table row in a Google Docs document, such as row height or header formatting.

- **Service**: `googledocs`
- **Action**: `update_table_row_style`
- **Action id**: `googledocs.update_table_row_style`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "update_table_row_style"
```

## Run

```bash
oo connector run "googledocs" --action "update_table_row_style" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Docs state. Confirm the exact payload and intended effect with the user before running.
