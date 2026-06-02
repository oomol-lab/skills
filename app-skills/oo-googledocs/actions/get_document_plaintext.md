# Google Docs · `get_document_plaintext`

Retrieve a Google Docs document and render it as best-effort plain text. This flattens paragraphs, lists, tables, and optional headers, footers, or footnotes.

- **Service**: `googledocs`
- **Action**: `get_document_plaintext`
- **Action id**: `googledocs.get_document_plaintext`
- **Required scopes**: googledocs.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "get_document_plaintext"
```

## Run

```bash
oo connector run "googledocs" --action "get_document_plaintext" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
