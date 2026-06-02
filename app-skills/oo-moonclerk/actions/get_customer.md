# MoonClerk · `get_customer`

Retrieve one MoonClerk customer by its numeric ID.

- **Service**: `moonclerk`
- **Action**: `get_customer`
- **Action id**: `moonclerk.get_customer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "moonclerk" --action "get_customer"
```

## Run

```bash
oo connector run "moonclerk" --action "get_customer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
