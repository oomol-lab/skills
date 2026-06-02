# Plisio · `get_balance`

Fetch the current Plisio balance for one supported cryptocurrency identifier.

- **Service**: `plisio`
- **Action**: `get_balance`
- **Action id**: `plisio.get_balance`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "plisio" --action "get_balance"
```

## Run

```bash
oo connector run "plisio" --action "get_balance" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
