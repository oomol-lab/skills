# Kit · `list_subscribers`

List Kit subscribers with optional filtering, sorting, and pagination.

- **Service**: `kit`
- **Action**: `list_subscribers`
- **Action id**: `kit.list_subscribers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "kit" --action "list_subscribers"
```

## Run

```bash
oo connector run "kit" --action "list_subscribers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
