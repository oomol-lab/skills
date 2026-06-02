# Google Docs · `insert_text_action`

Insert text at a specific index or append it to the end of a Google Docs document. When inserting by index, the position must be inside an existing paragraph.

- **Service**: `googledocs`
- **Action**: `insert_text_action`
- **Action id**: `googledocs.insert_text_action`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "insert_text_action"
```

## Run

```bash
oo connector run "googledocs" --action "insert_text_action" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Docs state. Confirm the exact payload and intended effect with the user before running.
