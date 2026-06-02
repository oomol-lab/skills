# Shodan · `count_search_results`

Count Shodan hosts matching a query and optionally return facet aggregations.

- **Service**: `shodan`
- **Action**: `count_search_results`
- **Action id**: `shodan.count_search_results`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shodan" --action "count_search_results"
```

## Run

```bash
oo connector run "shodan" --action "count_search_results" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
