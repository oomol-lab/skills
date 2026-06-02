# BoloForms · `list_documents`

List documents and form statistics from the current BoloForms workspace.

- **Service**: `boloforms`
- **Action**: `list_documents`
- **Action id**: `boloforms.list_documents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "boloforms" --action "list_documents"
```

## Run

```bash
oo connector run "boloforms" --action "list_documents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
