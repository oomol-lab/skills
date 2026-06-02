# Alchemy · `get_token_balances`

Retrieve ERC-20 token balances for a wallet address from Alchemy Ethereum mainnet.

- **Service**: `alchemy`
- **Action**: `get_token_balances`
- **Action id**: `alchemy.get_token_balances`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alchemy" --action "get_token_balances"
```

## Run

```bash
oo connector run "alchemy" --action "get_token_balances" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
