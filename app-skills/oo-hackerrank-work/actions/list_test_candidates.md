# HackerRank Work · `list_test_candidates`

List the candidates invited to or associated with a HackerRank test.

- **Service**: `hackerrank_work`
- **Action**: `list_test_candidates`
- **Action id**: `hackerrank_work.list_test_candidates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hackerrank_work" --action "list_test_candidates"
```

## Run

```bash
oo connector run "hackerrank_work" --action "list_test_candidates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
