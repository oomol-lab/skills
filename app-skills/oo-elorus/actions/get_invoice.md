# Elorus · `get_invoice`

Get one Elorus invoice by ID.

- **Service**: `elorus`
- **Action**: `get_invoice`
- **Action id**: `elorus.get_invoice`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elorus" --action "get_invoice"
```

## Run

```bash
oo connector run "elorus" --action "get_invoice" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
