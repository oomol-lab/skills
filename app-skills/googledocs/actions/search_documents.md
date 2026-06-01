# Google Docs · `search_documents`

Search Google Docs files with filters such as query text, dates, starred state, trash state, or shared-drive visibility.

- **Service**: `googledocs`
- **Action**: `search_documents`
- **Action id**: `googledocs.search_documents`
- **Required scopes**: googledocs.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "search_documents"
```

## Run

```bash
oo connector run "googledocs" --action "search_documents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
