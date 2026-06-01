# NASA · `get_donki_cme_analysis`

Retrieve DONKI coronal mass ejection analysis entries with optional accuracy and catalog filters.

- **Service**: `nasa`
- **Action**: `get_donki_cme_analysis`
- **Action id**: `nasa.get_donki_cme_analysis`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasa" --action "get_donki_cme_analysis"
```

## Run

```bash
oo connector run "nasa" --action "get_donki_cme_analysis" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
