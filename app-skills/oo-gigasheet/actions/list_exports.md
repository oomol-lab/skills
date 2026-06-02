# Gigasheet · `list_exports`

List exports owned by the current Gigasheet user across all locations.

- **Service**: `gigasheet`
- **Action**: `list_exports`
- **Action id**: `gigasheet.list_exports`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gigasheet" --action "list_exports"
```

## Run

```bash
oo connector run "gigasheet" --action "list_exports" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
