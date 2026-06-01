# arXiv · `get_papers`

Get multiple arXiv papers by arXiv identifiers.

- **Service**: `arxiv`
- **Action**: `get_papers`
- **Action id**: `arxiv.get_papers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "arxiv" --action "get_papers"
```

## Run

```bash
oo connector run "arxiv" --action "get_papers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
