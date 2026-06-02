# OKSign · `get_document_metadata`

Get OKSign metadata v2 for a signed document by signed_docid.

- **Service**: `oksign`
- **Action**: `get_document_metadata`
- **Action id**: `oksign.get_document_metadata`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "oksign" --action "get_document_metadata"
```

## Run

```bash
oo connector run "oksign" --action "get_document_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
