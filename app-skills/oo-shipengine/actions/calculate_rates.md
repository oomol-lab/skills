# ShipEngine · `calculate_rates`

Calculate shipping rates for a shipment request using connected ShipEngine carriers.

- **Service**: `shipengine`
- **Action**: `calculate_rates`
- **Action id**: `shipengine.calculate_rates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shipengine" --action "calculate_rates"
```

## Run

```bash
oo connector run "shipengine" --action "calculate_rates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
