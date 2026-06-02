# People Data Labs · `search_companies`

Search the People Data Labs company dataset with either an Elasticsearch query or SQL query.

- **Service**: `peopledatalabs`
- **Action**: `search_companies`
- **Action id**: `peopledatalabs.search_companies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "peopledatalabs" --action "search_companies"
```

## Run

```bash
oo connector run "peopledatalabs" --action "search_companies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
