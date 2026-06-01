# New Relic · `execute_nrql_query`

Execute an NRQL query against a specific New Relic account and return the query results and metadata.

- **Service**: `new_relic`
- **Action**: `execute_nrql_query`
- **Action id**: `new_relic.execute_nrql_query`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "execute_nrql_query"
```

## Run

```bash
oo connector run "new_relic" --action "execute_nrql_query" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
