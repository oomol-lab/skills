# OCR.space · `get_conversion_stats`

Fetch OCR.space conversion statistics for the current month or the previous month.

- **Service**: `ocrspace`
- **Action**: `get_conversion_stats`
- **Action id**: `ocrspace.get_conversion_stats`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ocrspace" --action "get_conversion_stats"
```

## Run

```bash
oo connector run "ocrspace" --action "get_conversion_stats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
