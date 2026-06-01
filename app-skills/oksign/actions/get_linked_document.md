# OKSign · `get_linked_document`

Resolve the corresponding source_docid and signed_docid pair for an OKSign document identifier.

- **Service**: `oksign`
- **Action**: `get_linked_document`
- **Action id**: `oksign.get_linked_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "oksign" --action "get_linked_document"
```

## Run

```bash
oo connector run "oksign" --action "get_linked_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
