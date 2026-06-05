# Typefully · `list_drafts`

List Typefully drafts for a social set with optional filters.

- **Service**: `typefully`
- **Action**: `list_drafts`
- **Action id**: `typefully.list_drafts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "typefully" --action "list_drafts"
```

## Run

```bash
oo connector run "typefully" --action "list_drafts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
