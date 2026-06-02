# Monday · `get_form`

Retrieve a Monday Workform by its unique form token.

- **Service**: `monday`
- **Action**: `get_form`
- **Action id**: `monday.get_form`
- **Required scopes**: boards:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "get_form"
```

## Run

```bash
oo connector run "monday" --action "get_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
