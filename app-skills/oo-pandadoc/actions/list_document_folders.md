# PandaDoc · `list_document_folders`

List document folders in the connected PandaDoc workspace.

- **Service**: `pandadoc`
- **Action**: `list_document_folders`
- **Action id**: `pandadoc.list_document_folders`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pandadoc" --action "list_document_folders"
```

## Run

```bash
oo connector run "pandadoc" --action "list_document_folders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
