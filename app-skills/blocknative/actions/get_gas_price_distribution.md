# Blocknative · `get_gas_price_distribution`

Get the current Blocknative gas-price distribution for Ethereum mainnet.

- **Service**: `blocknative`
- **Action**: `get_gas_price_distribution`
- **Action id**: `blocknative.get_gas_price_distribution`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "blocknative" --action "get_gas_price_distribution"
```

## Run

```bash
oo connector run "blocknative" --action "get_gas_price_distribution" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
