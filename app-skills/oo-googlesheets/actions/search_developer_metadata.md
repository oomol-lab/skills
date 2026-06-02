# Google Sheets · `search_developer_metadata`

Search spreadsheet developer metadata via developerMetadata:search and return matched entries only.

- **Service**: `googlesheets`
- **Action**: `search_developer_metadata`
- **Action id**: `googlesheets.search_developer_metadata`
- **Required scopes**: googlesheets.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlesheets" --action "search_developer_metadata"
```

## Run

```bash
oo connector run "googlesheets" --action "search_developer_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
