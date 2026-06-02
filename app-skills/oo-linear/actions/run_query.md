# Linear · `run_query`

Execute a read-only query directly against the Linear GraphQL API.

- **Service**: `linear`
- **Action**: `run_query`
- **Action id**: `linear.run_query`
- **Required scopes**: linear.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "run_query"
```

## Run

```bash
oo connector run "linear" --action "run_query" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
