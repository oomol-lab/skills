# Nasdaq Data Link · `get_datatable_metadata`

Retrieve schema, filter, refresh, and premium metadata for a Nasdaq Data Link datatable.

- **Service**: `nasdaq`
- **Action**: `get_datatable_metadata`
- **Action id**: `nasdaq.get_datatable_metadata`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasdaq" --action "get_datatable_metadata"
```

## Run

```bash
oo connector run "nasdaq" --action "get_datatable_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
