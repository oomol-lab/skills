# Uniswap API · `get_quote`

Request a Uniswap trade quote for one wallet, token pair, and amount.

- **Service**: `uniswap_api`
- **Action**: `get_quote`
- **Action id**: `uniswap_api.get_quote`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "uniswap_api" --action "get_quote"
```

## Run

```bash
oo connector run "uniswap_api" --action "get_quote" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
