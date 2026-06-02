# Docparser · `reparse_documents`

Schedule one or more Docparser documents for re-parsing using their document IDs.

- **Service**: `docparser`
- **Action**: `reparse_documents`
- **Action id**: `docparser.reparse_documents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docparser" --action "reparse_documents"
```

## Run

```bash
oo connector run "docparser" --action "reparse_documents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
