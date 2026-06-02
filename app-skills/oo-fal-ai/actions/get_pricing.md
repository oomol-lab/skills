# fal.ai · `get_pricing`

Retrieve unit pricing information for one or more fal model endpoints, including billing unit and currency.

- **Service**: `fal_ai`
- **Action**: `get_pricing`
- **Action id**: `fal_ai.get_pricing`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fal_ai" --action "get_pricing"
```

## Run

```bash
oo connector run "fal_ai" --action "get_pricing" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
