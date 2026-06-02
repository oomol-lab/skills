# Convex · `execute_query_batch`

Execute multiple Convex queries against a deployment and return results in the same order.

- **Service**: `convex`
- **Action**: `execute_query_batch`
- **Action id**: `convex.execute_query_batch`
- **Required scopes**: convex.http.query

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "execute_query_batch"
```

## Run

```bash
oo connector run "convex" --action "execute_query_batch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
