# Elorus · `update_invoice`

Update one Elorus invoice by ID using the official full-update endpoint.

- **Service**: `elorus`
- **Action**: `update_invoice`
- **Action id**: `elorus.update_invoice`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elorus" --action "update_invoice"
```

## Run

```bash
oo connector run "elorus" --action "update_invoice" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Elorus state. Confirm the exact payload and intended effect with the user before running.
