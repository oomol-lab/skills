# Uniswap API · `create_swap`

Create the transaction calldata for a Uniswap swap from a prior quote and optional permit signature.

- **Service**: `uniswap_api`
- **Action**: `create_swap`
- **Action id**: `uniswap_api.create_swap`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "uniswap_api" --action "create_swap"
```

## Run

```bash
oo connector run "uniswap_api" --action "create_swap" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Uniswap API state. Confirm the exact payload and intended effect with the user before running.
