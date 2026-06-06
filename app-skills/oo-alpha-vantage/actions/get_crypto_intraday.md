# Alpha Vantage · `get_crypto_intraday`

Retrieve raw intraday OHLCV data for a cryptocurrency market pair.

- **Service**: `alpha_vantage`
- **Action**: `get_crypto_intraday`
- **Action id**: `alpha_vantage.get_crypto_intraday`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_crypto_intraday"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_crypto_intraday" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
