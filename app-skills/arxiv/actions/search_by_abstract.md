# arXiv · `search_by_abstract`

Search arXiv papers by abstract text.

- **Service**: `arxiv`
- **Action**: `search_by_abstract`
- **Action id**: `arxiv.search_by_abstract`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "arxiv" --action "search_by_abstract"
```

## Run

```bash
oo connector run "arxiv" --action "search_by_abstract" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
