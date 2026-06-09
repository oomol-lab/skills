# Goody · `list_payment_methods`

List Goody payment methods available to the current account.

- **Service**: `goody`
- **Action**: `list_payment_methods`
- **Action id**: `goody.list_payment_methods`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "goody" --action "list_payment_methods"
```

## Run

```bash
oo connector run "goody" --action "list_payment_methods" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
