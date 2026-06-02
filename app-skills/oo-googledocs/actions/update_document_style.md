# Google Docs · `update_document_style`

Update global document style settings such as page size, margins, or text direction in a Google Docs document.

- **Service**: `googledocs`
- **Action**: `update_document_style`
- **Action id**: `googledocs.update_document_style`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "update_document_style"
```

## Run

```bash
oo connector run "googledocs" --action "update_document_style" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Docs state. Confirm the exact payload and intended effect with the user before running.
