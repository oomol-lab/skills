# Coda · `get_mutation_status`

Get the completion status for an asynchronous Coda mutation using a previously returned request ID.

- **Service**: `coda`
- **Action**: `get_mutation_status`
- **Action id**: `coda.get_mutation_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coda" --action "get_mutation_status"
```

## Run

```bash
oo connector run "coda" --action "get_mutation_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
