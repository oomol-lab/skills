# arXiv · `search_by_author`

Search arXiv papers by author name.

- **Service**: `arxiv`
- **Action**: `search_by_author`
- **Action id**: `arxiv.search_by_author`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "arxiv" --action "search_by_author"
```

## Run

```bash
oo connector run "arxiv" --action "search_by_author" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
