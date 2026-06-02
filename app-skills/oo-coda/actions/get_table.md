# Coda · `get_table`

Get details about a specific Coda table or view.

- **Service**: `coda`
- **Action**: `get_table`
- **Action id**: `coda.get_table`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coda" --action "get_table"
```

## Run

```bash
oo connector run "coda" --action "get_table" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
