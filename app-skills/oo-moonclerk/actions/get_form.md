# MoonClerk · `get_form`

Retrieve one MoonClerk payment form by its numeric ID.

- **Service**: `moonclerk`
- **Action**: `get_form`
- **Action id**: `moonclerk.get_form`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "moonclerk" --action "get_form"
```

## Run

```bash
oo connector run "moonclerk" --action "get_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
