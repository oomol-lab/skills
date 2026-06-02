# Elorus · `update_product`

Update one Elorus product or service by ID.

- **Service**: `elorus`
- **Action**: `update_product`
- **Action id**: `elorus.update_product`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elorus" --action "update_product"
```

## Run

```bash
oo connector run "elorus" --action "update_product" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Elorus state. Confirm the exact payload and intended effect with the user before running.
