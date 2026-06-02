# Monday · `deactivate_form`

Deactivate a Monday Workform so it stops accepting submissions.

- **Service**: `monday`
- **Action**: `deactivate_form`
- **Action id**: `monday.deactivate_form`
- **Required scopes**: forms:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "deactivate_form"
```

## Run

```bash
oo connector run "monday" --action "deactivate_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Monday data. Always confirm the target and get explicit user approval before running.
