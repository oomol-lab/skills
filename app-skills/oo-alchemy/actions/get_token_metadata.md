# Alchemy · `get_token_metadata`

Retrieve ERC-20 token metadata for one contract from Alchemy Ethereum mainnet.

- **Service**: `alchemy`
- **Action**: `get_token_metadata`
- **Action id**: `alchemy.get_token_metadata`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alchemy" --action "get_token_metadata"
```

## Run

```bash
oo connector run "alchemy" --action "get_token_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
