# Google Docs · `insert_page_break`

Insert a page break at a specified location in a Google Docs document.

- **Service**: `googledocs`
- **Action**: `insert_page_break`
- **Action id**: `googledocs.insert_page_break`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "insert_page_break"
```

## Run

```bash
oo connector run "googledocs" --action "insert_page_break" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Docs state. Confirm the exact payload and intended effect with the user before running.
