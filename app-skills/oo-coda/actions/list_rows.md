# Coda · `list_rows`

List rows in a Coda table with filtering, sorting, pagination, optional sync tokens, and configurable cell value formats.

- **Service**: `coda`
- **Action**: `list_rows`
- **Action id**: `coda.list_rows`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coda" --action "list_rows"
```

## Run

```bash
oo connector run "coda" --action "list_rows" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
