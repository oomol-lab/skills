# Foxit Cloud API · `linearize_document`

Linearize one PDF to improve incremental web viewing in Foxit.

- **Service**: `fuxin`
- **Action**: `linearize_document`
- **Action id**: `fuxin.linearize_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "linearize_document"
```

## Run

```bash
oo connector run "fuxin" --action "linearize_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
