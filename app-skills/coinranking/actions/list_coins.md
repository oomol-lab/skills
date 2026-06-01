# Coinranking · `list_coins`

List coins from Coinranking with optional filtering, sorting, and pagination.

- **Service**: `coinranking`
- **Action**: `list_coins`
- **Action id**: `coinranking.list_coins`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coinranking" --action "list_coins"
```

## Run

```bash
oo connector run "coinranking" --action "list_coins" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
