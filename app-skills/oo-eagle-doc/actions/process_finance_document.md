# Eagle Doc · `process_finance_document`

Upload one invoice, receipt, or PDF to Eagle Doc Finance OCR and return the structured extraction result.

- **Service**: `eagle_doc`
- **Action**: `process_finance_document`
- **Action id**: `eagle_doc.process_finance_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eagle_doc" --action "process_finance_document"
```

## Run

```bash
oo connector run "eagle_doc" --action "process_finance_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
