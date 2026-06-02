# Google Docs · `insert_table_action`

Insert a table at a specific index or at the end of a segment in a Google Docs document.

- **Service**: `googledocs`
- **Action**: `insert_table_action`
- **Action id**: `googledocs.insert_table_action`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "insert_table_action"
```

## Run

```bash
oo connector run "googledocs" --action "insert_table_action" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Docs state. Confirm the exact payload and intended effect with the user before running.
