# MoonClerk · `list_payments`

List MoonClerk payments with official filters for form, customer, payment date, and status.

- **Service**: `moonclerk`
- **Action**: `list_payments`
- **Action id**: `moonclerk.list_payments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "moonclerk" --action "list_payments"
```

## Run

```bash
oo connector run "moonclerk" --action "list_payments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
