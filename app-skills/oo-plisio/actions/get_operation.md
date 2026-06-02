# Plisio · `get_operation`

Fetch one Plisio operation or invoice by its official operation identifier.

- **Service**: `plisio`
- **Action**: `get_operation`
- **Action id**: `plisio.get_operation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "plisio" --action "get_operation"
```

## Run

```bash
oo connector run "plisio" --action "get_operation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
