# TaxJar · `show_customer`

Retrieve a TaxJar customer by identifier.

- **Service**: `taxjar`
- **Action**: `show_customer`
- **Action id**: `taxjar.show_customer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "taxjar" --action "show_customer"
```

## Run

```bash
oo connector run "taxjar" --action "show_customer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
