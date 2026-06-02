# OpenRouter · `create_coinbase_charge`

Call OpenRouter's deprecated Coinbase charge endpoint for credits purchases. The upstream endpoint is currently deprecated and may return 410 Gone.

- **Service**: `openrouter`
- **Action**: `create_coinbase_charge`
- **Action id**: `openrouter.create_coinbase_charge`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openrouter" --action "create_coinbase_charge"
```

## Run

```bash
oo connector run "openrouter" --action "create_coinbase_charge" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OpenRouter state. Confirm the exact payload and intended effect with the user before running.
