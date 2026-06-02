# MoonClerk · `list_forms`

List MoonClerk payment forms with official pagination parameters.

- **Service**: `moonclerk`
- **Action**: `list_forms`
- **Action id**: `moonclerk.list_forms`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "moonclerk" --action "list_forms"
```

## Run

```bash
oo connector run "moonclerk" --action "list_forms" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
