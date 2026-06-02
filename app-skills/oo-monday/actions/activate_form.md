# Monday · `activate_form`

Activate a Monday Workform so it starts accepting submissions.

- **Service**: `monday`
- **Action**: `activate_form`
- **Action id**: `monday.activate_form`
- **Required scopes**: forms:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "activate_form"
```

## Run

```bash
oo connector run "monday" --action "activate_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
