# VATlayer · `calculate_price`

Calculate VAT-compliant inclusive and exclusive prices with vatlayer.

- **Service**: `vatlayer`
- **Action**: `calculate_price`
- **Action id**: `vatlayer.calculate_price`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vatlayer" --action "calculate_price"
```

## Run

```bash
oo connector run "vatlayer" --action "calculate_price" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
