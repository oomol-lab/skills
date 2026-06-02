# Longbridge · `list_stock_positions`

List Longbridge stock positions visible to the connected OAuth user.

- **Service**: `longbridge`
- **Action**: `list_stock_positions`
- **Action id**: `longbridge.list_stock_positions`
- **Required scopes**: longbridge.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "longbridge" --action "list_stock_positions"
```

## Run

```bash
oo connector run "longbridge" --action "list_stock_positions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
