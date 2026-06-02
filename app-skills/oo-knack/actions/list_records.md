# Knack · `list_records`

List records from one Knack object with optional pagination, sorting, formatting, and filter query parameters.

- **Service**: `knack`
- **Action**: `list_records`
- **Action id**: `knack.list_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "knack" --action "list_records"
```

## Run

```bash
oo connector run "knack" --action "list_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
