# ShipEngine · `estimate_rates`

Estimate shipping rates with basic address and package information.

- **Service**: `shipengine`
- **Action**: `estimate_rates`
- **Action id**: `shipengine.estimate_rates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shipengine" --action "estimate_rates"
```

## Run

```bash
oo connector run "shipengine" --action "estimate_rates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
