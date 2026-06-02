# Celigo · `list_exports`

List exports available in the current Celigo account.

- **Service**: `celigo`
- **Action**: `list_exports`
- **Action id**: `celigo.list_exports`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "celigo" --action "list_exports"
```

## Run

```bash
oo connector run "celigo" --action "list_exports" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
