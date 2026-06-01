# arXiv · `search_papers`

Search arXiv papers using the official arXiv API query syntax.

- **Service**: `arxiv`
- **Action**: `search_papers`
- **Action id**: `arxiv.search_papers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "arxiv" --action "search_papers"
```

## Run

```bash
oo connector run "arxiv" --action "search_papers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
