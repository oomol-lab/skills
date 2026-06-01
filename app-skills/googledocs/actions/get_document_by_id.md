# Google Docs · `get_document_by_id`

Retrieve a Google Docs document by ID. Use `include_tabs_content` when you need tab content in the response.

- **Service**: `googledocs`
- **Action**: `get_document_by_id`
- **Action id**: `googledocs.get_document_by_id`
- **Required scopes**: googledocs.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "get_document_by_id"
```

## Run

```bash
oo connector run "googledocs" --action "get_document_by_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
