# arXiv · `list_recent_papers`

List recent arXiv papers for one category sorted by submission date.

- **Service**: `arxiv`
- **Action**: `list_recent_papers`
- **Action id**: `arxiv.list_recent_papers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "arxiv" --action "list_recent_papers"
```

## Run

```bash
oo connector run "arxiv" --action "list_recent_papers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
