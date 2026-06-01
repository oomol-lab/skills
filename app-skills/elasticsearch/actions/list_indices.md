# Elasticsearch · `list_indices`

List Elasticsearch indices visible to the connected user.

- **Service**: `elasticsearch`
- **Action**: `list_indices`
- **Action id**: `elasticsearch.list_indices`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elasticsearch" --action "list_indices"
```

## Run

```bash
oo connector run "elasticsearch" --action "list_indices" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
