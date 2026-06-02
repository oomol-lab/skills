# People Data Labs · `search_people`

Search the People Data Labs person dataset with either an Elasticsearch query or SQL query.

- **Service**: `peopledatalabs`
- **Action**: `search_people`
- **Action id**: `peopledatalabs.search_people`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "peopledatalabs" --action "search_people"
```

## Run

```bash
oo connector run "peopledatalabs" --action "search_people" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
