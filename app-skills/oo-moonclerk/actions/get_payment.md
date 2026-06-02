# MoonClerk · `get_payment`

Retrieve one MoonClerk payment by its numeric ID.

- **Service**: `moonclerk`
- **Action**: `get_payment`
- **Action id**: `moonclerk.get_payment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "moonclerk" --action "get_payment"
```

## Run

```bash
oo connector run "moonclerk" --action "get_payment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
