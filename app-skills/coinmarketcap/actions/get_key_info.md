# CoinMarketCap · `get_key_info`

Retrieve plan limits and usage details for the current CoinMarketCap API key.

- **Service**: `coinmarketcap`
- **Action**: `get_key_info`
- **Action id**: `coinmarketcap.get_key_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coinmarketcap" --action "get_key_info"
```

## Run

```bash
oo connector run "coinmarketcap" --action "get_key_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
