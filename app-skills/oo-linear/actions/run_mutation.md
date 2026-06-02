# Linear · `run_mutation`

Perform a mutation directly on the Linear GraphQL API.

- **Service**: `linear`
- **Action**: `run_mutation`
- **Action id**: `linear.run_mutation`
- **Required scopes**: linear.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "run_mutation"
```

## Run

```bash
oo connector run "linear" --action "run_mutation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
