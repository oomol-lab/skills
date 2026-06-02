# Coda · `get_doc`

Get metadata for a specific Coda doc by doc ID.

- **Service**: `coda`
- **Action**: `get_doc`
- **Action id**: `coda.get_doc`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coda" --action "get_doc"
```

## Run

```bash
oo connector run "coda" --action "get_doc" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
