# HackerRank Work · `list_tests`

List the HackerRank tests available to the authenticated account.

- **Service**: `hackerrank_work`
- **Action**: `list_tests`
- **Action id**: `hackerrank_work.list_tests`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hackerrank_work" --action "list_tests"
```

## Run

```bash
oo connector run "hackerrank_work" --action "list_tests" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
