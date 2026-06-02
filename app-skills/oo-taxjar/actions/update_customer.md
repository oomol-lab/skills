# TaxJar · `update_customer`

Update an existing TaxJar customer.

- **Service**: `taxjar`
- **Action**: `update_customer`
- **Action id**: `taxjar.update_customer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "taxjar" --action "update_customer"
```

## Run

```bash
oo connector run "taxjar" --action "update_customer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TaxJar state. Confirm the exact payload and intended effect with the user before running.
