# Convex · `run_function`

Execute an arbitrary Convex function through `/api/run/{functionIdentifier}` using a slash-separated identifier.

- **Service**: `convex`
- **Action**: `run_function`
- **Action id**: `convex.run_function`
- **Required scopes**: convex.http.run

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "run_function"
```

## Run

```bash
oo connector run "convex" --action "run_function" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
