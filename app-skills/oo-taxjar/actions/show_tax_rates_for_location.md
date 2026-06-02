# TaxJar · `show_tax_rates_for_location`

Retrieve TaxJar sales tax rates for a location.

- **Service**: `taxjar`
- **Action**: `show_tax_rates_for_location`
- **Action id**: `taxjar.show_tax_rates_for_location`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "taxjar" --action "show_tax_rates_for_location"
```

## Run

```bash
oo connector run "taxjar" --action "show_tax_rates_for_location" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
