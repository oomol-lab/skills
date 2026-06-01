# HackerRank Work · `get_test`

Retrieve one HackerRank test by id.

- **Service**: `hackerrank_work`
- **Action**: `get_test`
- **Action id**: `hackerrank_work.get_test`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hackerrank_work" --action "get_test"
```

## Run

```bash
oo connector run "hackerrank_work" --action "get_test" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
