# Convex · `run_mutation`

Execute a Convex mutation through the deployment HTTP API.

- **Service**: `convex`
- **Action**: `run_mutation`
- **Action id**: `convex.run_mutation`
- **Required scopes**: convex.http.mutation

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "run_mutation"
```

## Run

```bash
oo connector run "convex" --action "run_mutation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
