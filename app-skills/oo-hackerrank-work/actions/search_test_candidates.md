# HackerRank Work · `search_test_candidates`

Search HackerRank test candidates by name or email.

- **Service**: `hackerrank_work`
- **Action**: `search_test_candidates`
- **Action id**: `hackerrank_work.search_test_candidates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hackerrank_work" --action "search_test_candidates"
```

## Run

```bash
oo connector run "hackerrank_work" --action "search_test_candidates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
