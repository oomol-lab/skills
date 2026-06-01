# Google Docs · `create_document`

Create a Google Docs document and optionally insert initial text at the beginning. Returns document metadata without the full body content.

- **Service**: `googledocs`
- **Action**: `create_document`
- **Action id**: `googledocs.create_document`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "create_document"
```

## Run

```bash
oo connector run "googledocs" --action "create_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Docs state. Confirm the exact payload and intended effect with the user before running.
