# Formsite · `list_forms`

List all forms available in the connected Formsite account user directory.

- **Service**: `formsite`
- **Action**: `list_forms`
- **Action id**: `formsite.list_forms`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "formsite" --action "list_forms"
```

## Run

```bash
oo connector run "formsite" --action "list_forms" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
