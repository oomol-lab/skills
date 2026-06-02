# PandaDoc · `get_document_details`

Retrieve detailed metadata for a specific PandaDoc document.

- **Service**: `pandadoc`
- **Action**: `get_document_details`
- **Action id**: `pandadoc.get_document_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pandadoc" --action "get_document_details"
```

## Run

```bash
oo connector run "pandadoc" --action "get_document_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
