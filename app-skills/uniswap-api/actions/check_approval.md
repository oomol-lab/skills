# Uniswap API · `check_approval`

Check whether the swapper wallet needs an ERC-20 approval transaction before swapping.

- **Service**: `uniswap_api`
- **Action**: `check_approval`
- **Action id**: `uniswap_api.check_approval`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "uniswap_api" --action "check_approval"
```

## Run

```bash
oo connector run "uniswap_api" --action "check_approval" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
