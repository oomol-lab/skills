# Blocknative · `get_gas_prices`

Get Blocknative gas-price estimates for the default chain or a selected network.

- **Service**: `blocknative`
- **Action**: `get_gas_prices`
- **Action id**: `blocknative.get_gas_prices`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "blocknative" --action "get_gas_prices"
```

## Run

```bash
oo connector run "blocknative" --action "get_gas_prices" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
