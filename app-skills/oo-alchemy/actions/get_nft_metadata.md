# Alchemy · `get_nft_metadata`

Retrieve metadata for a specific NFT from Alchemy Ethereum mainnet.

- **Service**: `alchemy`
- **Action**: `get_nft_metadata`
- **Action id**: `alchemy.get_nft_metadata`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alchemy" --action "get_nft_metadata"
```

## Run

```bash
oo connector run "alchemy" --action "get_nft_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
