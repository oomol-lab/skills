# arXiv · `search_by_title`

Search arXiv papers by title text.

- **Service**: `arxiv`
- **Action**: `search_by_title`
- **Action id**: `arxiv.search_by_title`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "arxiv" --action "search_by_title"
```

## Run

```bash
oo connector run "arxiv" --action "search_by_title" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
