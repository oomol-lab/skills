# arXiv · `search_by_all_fields`

Search arXiv papers by combining optional all-field, author, title, abstract, and category filters.

- **Service**: `arxiv`
- **Action**: `search_by_all_fields`
- **Action id**: `arxiv.search_by_all_fields`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "arxiv" --action "search_by_all_fields"
```

## Run

```bash
oo connector run "arxiv" --action "search_by_all_fields" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
