# Formsite · `get_form_results`

List results for one Formsite form with pagination, date windows, result ID windows, and upstream search filters.

- **Service**: `formsite`
- **Action**: `get_form_results`
- **Action id**: `formsite.get_form_results`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "formsite" --action "get_form_results"
```

## Run

```bash
oo connector run "formsite" --action "get_form_results" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
