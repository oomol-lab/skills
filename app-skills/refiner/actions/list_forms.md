# Refiner · `list_forms`

List forms in the connected Refiner workspace.

- **Service**: `refiner`
- **Action**: `list_forms`
- **Action id**: `refiner.list_forms`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "refiner" --action "list_forms"
```

## Run

```bash
oo connector run "refiner" --action "list_forms" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
