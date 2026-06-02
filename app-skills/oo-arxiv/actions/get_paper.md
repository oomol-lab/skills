# arXiv · `get_paper`

Get one arXiv paper by arXiv identifier.

- **Service**: `arxiv`
- **Action**: `get_paper`
- **Action id**: `arxiv.get_paper`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "arxiv" --action "get_paper"
```

## Run

```bash
oo connector run "arxiv" --action "get_paper" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
