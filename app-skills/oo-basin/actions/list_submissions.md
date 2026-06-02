# Basin · `list_submissions`

List Basin form submissions with optional filters.

- **Service**: `basin`
- **Action**: `list_submissions`
- **Action id**: `basin.list_submissions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "basin" --action "list_submissions"
```

## Run

```bash
oo connector run "basin" --action "list_submissions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
