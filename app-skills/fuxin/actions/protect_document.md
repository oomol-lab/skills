# Foxit Cloud API · `protect_document`

Protect one PDF with passwords and permissions in Foxit.

- **Service**: `fuxin`
- **Action**: `protect_document`
- **Action id**: `fuxin.protect_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "protect_document"
```

## Run

```bash
oo connector run "fuxin" --action "protect_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
