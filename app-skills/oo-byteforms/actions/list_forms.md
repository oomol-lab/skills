# ByteForms · `list_forms`

List forms available to the authenticated ByteForms account.

- **Service**: `byteforms`
- **Action**: `list_forms`
- **Action id**: `byteforms.list_forms`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "byteforms" --action "list_forms"
```

## Run

```bash
oo connector run "byteforms" --action "list_forms" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
