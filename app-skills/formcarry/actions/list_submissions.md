# Formcarry · `list_submissions`

List submissions for a Formcarry form with the documented pagination, sorting, and filtering query parameters.

- **Service**: `formcarry`
- **Action**: `list_submissions`
- **Action id**: `formcarry.list_submissions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "formcarry" --action "list_submissions"
```

## Run

```bash
oo connector run "formcarry" --action "list_submissions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
