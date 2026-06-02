# Elasticsearch · `get_index_schema`

Get mappings, settings, aliases, and field statistics for one Elasticsearch index.

- **Service**: `elasticsearch`
- **Action**: `get_index_schema`
- **Action id**: `elasticsearch.get_index_schema`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elasticsearch" --action "get_index_schema"
```

## Run

```bash
oo connector run "elasticsearch" --action "get_index_schema" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
