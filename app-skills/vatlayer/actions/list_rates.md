# VATlayer · `list_rates`

Retrieve VAT rates for all EU member states from vatlayer.

- **Service**: `vatlayer`
- **Action**: `list_rates`
- **Action id**: `vatlayer.list_rates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vatlayer" --action "list_rates"
```

## Run

```bash
oo connector run "vatlayer" --action "list_rates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
