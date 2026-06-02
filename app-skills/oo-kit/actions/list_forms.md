# Kit · `list_forms`

List Kit forms and landing pages with optional filters and pagination.

- **Service**: `kit`
- **Action**: `list_forms`
- **Action id**: `kit.list_forms`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "kit" --action "list_forms"
```

## Run

```bash
oo connector run "kit" --action "list_forms" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
