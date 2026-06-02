# TaxJar · `summarize_tax_rates_for_all_regions`

Retrieve TaxJar minimum and average sales tax rates by region.

- **Service**: `taxjar`
- **Action**: `summarize_tax_rates_for_all_regions`
- **Action id**: `taxjar.summarize_tax_rates_for_all_regions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "taxjar" --action "summarize_tax_rates_for_all_regions"
```

## Run

```bash
oo connector run "taxjar" --action "summarize_tax_rates_for_all_regions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
