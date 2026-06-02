# Nasdaq Data Link · `get_datatable`

Request a bulk export for a Nasdaq Data Link datatable and return the current file status plus download link when available.

- **Service**: `nasdaq`
- **Action**: `get_datatable`
- **Action id**: `nasdaq.get_datatable`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasdaq" --action "get_datatable"
```

## Run

```bash
oo connector run "nasdaq" --action "get_datatable" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
