# TaxJar · `list_tax_categories`

List TaxJar product tax categories and codes.

- **Service**: `taxjar`
- **Action**: `list_tax_categories`
- **Action id**: `taxjar.list_tax_categories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "taxjar" --action "list_tax_categories"
```

## Run

```bash
oo connector run "taxjar" --action "list_tax_categories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
