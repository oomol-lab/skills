# Alchemy · `get_nfts_for_owner`

Retrieve NFTs currently owned by an address from Alchemy Ethereum mainnet.

- **Service**: `alchemy`
- **Action**: `get_nfts_for_owner`
- **Action id**: `alchemy.get_nfts_for_owner`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alchemy" --action "get_nfts_for_owner"
```

## Run

```bash
oo connector run "alchemy" --action "get_nfts_for_owner" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
