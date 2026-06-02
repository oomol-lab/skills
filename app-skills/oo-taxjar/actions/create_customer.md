# TaxJar · `create_customer`

Create a TaxJar customer for exemption management.

- **Service**: `taxjar`
- **Action**: `create_customer`
- **Action id**: `taxjar.create_customer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "taxjar" --action "create_customer"
```

## Run

```bash
oo connector run "taxjar" --action "create_customer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TaxJar state. Confirm the exact payload and intended effect with the user before running.
