# MoonClerk · `list_customers`

List MoonClerk customers with official filters for form, checkout date, next payment date, and status.

- **Service**: `moonclerk`
- **Action**: `list_customers`
- **Action id**: `moonclerk.list_customers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "moonclerk" --action "list_customers"
```

## Run

```bash
oo connector run "moonclerk" --action "list_customers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
