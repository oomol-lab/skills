# Notion · `query_data_source`

Query a Notion data source with filters, sorts, pagination, and optional property filtering.

- **Service**: `notion`
- **Action**: `query_data_source`
- **Action id**: `notion.query_data_source`
- **Required scopes**: notion.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "query_data_source"
```

## Run

```bash
oo connector run "notion" --action "query_data_source" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
