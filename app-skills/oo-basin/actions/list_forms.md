# Basin · `list_forms`

List forms available to the current Basin API key.

- **Service**: `basin`
- **Action**: `list_forms`
- **Action id**: `basin.list_forms`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "basin" --action "list_forms"
```

## Run

```bash
oo connector run "basin" --action "list_forms" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
