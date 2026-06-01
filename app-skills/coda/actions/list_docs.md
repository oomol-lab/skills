# Coda · `list_docs`

List Coda docs accessible to the authenticated user with optional ownership, publication, workspace, and pagination filters.

- **Service**: `coda`
- **Action**: `list_docs`
- **Action id**: `coda.list_docs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coda" --action "list_docs"
```

## Run

```bash
oo connector run "coda" --action "list_docs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
