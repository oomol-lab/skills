# Coda · `list_columns`

List columns in a Coda table with pagination and optional visibility filtering.

- **Service**: `coda`
- **Action**: `list_columns`
- **Action id**: `coda.list_columns`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coda" --action "list_columns"
```

## Run

```bash
oo connector run "coda" --action "list_columns" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
