# Typefully · `get_draft`

Retrieve a Typefully draft by ID.

- **Service**: `typefully`
- **Action**: `get_draft`
- **Action id**: `typefully.get_draft`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "typefully" --action "get_draft"
```

## Run

```bash
oo connector run "typefully" --action "get_draft" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
