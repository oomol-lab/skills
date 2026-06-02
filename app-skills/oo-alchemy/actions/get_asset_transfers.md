# Alchemy · `get_asset_transfers`

Retrieve historical asset transfers for Ethereum mainnet addresses through Alchemy.

- **Service**: `alchemy`
- **Action**: `get_asset_transfers`
- **Action id**: `alchemy.get_asset_transfers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alchemy" --action "get_asset_transfers"
```

## Run

```bash
oo connector run "alchemy" --action "get_asset_transfers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
