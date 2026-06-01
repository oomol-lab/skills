# Shodan · `search_hosts`

Search Shodan hosts with a query string and optional facet aggregation.

- **Service**: `shodan`
- **Action**: `search_hosts`
- **Action id**: `shodan.search_hosts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shodan" --action "search_hosts"
```

## Run

```bash
oo connector run "shodan" --action "search_hosts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
