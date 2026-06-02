# HackerRank Work · `get_test_candidate`

Retrieve one HackerRank candidate from a specific test.

- **Service**: `hackerrank_work`
- **Action**: `get_test_candidate`
- **Action id**: `hackerrank_work.get_test_candidate`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hackerrank_work" --action "get_test_candidate"
```

## Run

```bash
oo connector run "hackerrank_work" --action "get_test_candidate" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
