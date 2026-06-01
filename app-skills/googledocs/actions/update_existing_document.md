# Google Docs · `update_existing_document`

Apply one or more programmatic edits to an existing Google Docs document through `batchUpdate`. Use this for structured insert, delete, or formatting changes.

- **Service**: `googledocs`
- **Action**: `update_existing_document`
- **Action id**: `googledocs.update_existing_document`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "update_existing_document"
```

## Run

```bash
oo connector run "googledocs" --action "update_existing_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Docs state. Confirm the exact payload and intended effect with the user before running.
