# Coinranking · `get_coin_details`

Get detailed information for a single coin from Coinranking.

- **Service**: `coinranking`
- **Action**: `get_coin_details`
- **Action id**: `coinranking.get_coin_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coinranking" --action "get_coin_details"
```

## Run

```bash
oo connector run "coinranking" --action "get_coin_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
