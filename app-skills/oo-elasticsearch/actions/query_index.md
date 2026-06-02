# Elasticsearch · `query_index`

Search an Elasticsearch index with text queries, filters, pagination, and sorting.

- **Service**: `elasticsearch`
- **Action**: `query_index`
- **Action id**: `elasticsearch.query_index`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elasticsearch" --action "query_index"
```

## Run

```bash
oo connector run "elasticsearch" --action "query_index" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
