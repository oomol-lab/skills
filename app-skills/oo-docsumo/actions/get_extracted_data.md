# Docsumo · `get_extracted_data`

Get the simplified extracted Docsumo data for one document and preserve the dynamic section and field structure.

- **Service**: `docsumo`
- **Action**: `get_extracted_data`
- **Action id**: `docsumo.get_extracted_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docsumo" --action "get_extracted_data"
```

## Run

```bash
oo connector run "docsumo" --action "get_extracted_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
