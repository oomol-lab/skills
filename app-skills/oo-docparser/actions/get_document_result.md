# Docparser · `get_document_result`

Retrieve the parsed data of one Docparser document. When child documents exist and are included, multiple result rows may be returned.

- **Service**: `docparser`
- **Action**: `get_document_result`
- **Action id**: `docparser.get_document_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docparser" --action "get_document_result"
```

## Run

```bash
oo connector run "docparser" --action "get_document_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
