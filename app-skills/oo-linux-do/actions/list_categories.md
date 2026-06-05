# Linux DO · `list_categories`

List public Linux DO categories.

- **Service**: `linux_do`
- **Action**: `list_categories`
- **Action id**: `linux_do.list_categories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linux_do" --action "list_categories"
```

## Run

```bash
oo connector run "linux_do" --action "list_categories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
