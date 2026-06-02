# Convex · `run_query`

Execute a Convex query through the deployment HTTP API.

- **Service**: `convex`
- **Action**: `run_query`
- **Action id**: `convex.run_query`
- **Required scopes**: convex.http.query

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "run_query"
```

## Run

```bash
oo connector run "convex" --action "run_query" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
