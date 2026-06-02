# VATlayer · `get_rate`

Retrieve VAT rates for one country selected by country code, IP address, or client IP.

- **Service**: `vatlayer`
- **Action**: `get_rate`
- **Action id**: `vatlayer.get_rate`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vatlayer" --action "get_rate"
```

## Run

```bash
oo connector run "vatlayer" --action "get_rate" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
