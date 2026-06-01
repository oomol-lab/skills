# fal.ai · `estimate_pricing`

Estimate total fal model cost using either historical API call quantities or expected billing-unit quantities.

- **Service**: `fal_ai`
- **Action**: `estimate_pricing`
- **Action id**: `fal_ai.estimate_pricing`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fal_ai" --action "estimate_pricing"
```

## Run

```bash
oo connector run "fal_ai" --action "estimate_pricing" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
