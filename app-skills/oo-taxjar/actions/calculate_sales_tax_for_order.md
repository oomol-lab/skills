# TaxJar · `calculate_sales_tax_for_order`

Calculate TaxJar sales tax for an order.

- **Service**: `taxjar`
- **Action**: `calculate_sales_tax_for_order`
- **Action id**: `taxjar.calculate_sales_tax_for_order`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "taxjar" --action "calculate_sales_tax_for_order"
```

## Run

```bash
oo connector run "taxjar" --action "calculate_sales_tax_for_order" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
