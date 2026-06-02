# Lemon Squeezy · `retrieve_customer`

Retrieve a single Lemon Squeezy customer by ID.

- **Service**: `lemon_squeezy`
- **Action**: `retrieve_customer`
- **Action id**: `lemon_squeezy.retrieve_customer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lemon_squeezy" --action "retrieve_customer"
```

## Run

```bash
oo connector run "lemon_squeezy" --action "retrieve_customer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
