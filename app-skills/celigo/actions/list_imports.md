# Celigo · `list_imports`

List imports available in the current Celigo account.

- **Service**: `celigo`
- **Action**: `list_imports`
- **Action id**: `celigo.list_imports`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "celigo" --action "list_imports"
```

## Run

```bash
oo connector run "celigo" --action "list_imports" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
