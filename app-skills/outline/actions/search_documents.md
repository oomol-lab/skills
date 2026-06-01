# Outline · `search_documents`

Search Outline documents by keyword with optional scope, recency, snippet, pagination, and sorting controls.

- **Service**: `outline`
- **Action**: `search_documents`
- **Action id**: `outline.search_documents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "outline" --action "search_documents"
```

## Run

```bash
oo connector run "outline" --action "search_documents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
