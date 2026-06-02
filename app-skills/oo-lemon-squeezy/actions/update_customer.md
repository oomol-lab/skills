# Lemon Squeezy · `update_customer`

Update a Lemon Squeezy customer by ID.

- **Service**: `lemon_squeezy`
- **Action**: `update_customer`
- **Action id**: `lemon_squeezy.update_customer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lemon_squeezy" --action "update_customer"
```

## Run

```bash
oo connector run "lemon_squeezy" --action "update_customer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Lemon Squeezy state. Confirm the exact payload and intended effect with the user before running.
