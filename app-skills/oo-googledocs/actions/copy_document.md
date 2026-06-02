# Google Docs · `copy_document`

Copy an existing Google Docs document through Google Drive. If `title` is omitted, Google assigns the default copied-document title.

- **Service**: `googledocs`
- **Action**: `copy_document`
- **Action id**: `googledocs.copy_document`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "copy_document"
```

## Run

```bash
oo connector run "googledocs" --action "copy_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Docs state. Confirm the exact payload and intended effect with the user before running.
