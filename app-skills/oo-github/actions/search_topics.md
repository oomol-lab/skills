# GitHub · `search_topics`

Search GitHub topics with GitHub search syntax.

- **Service**: `github`
- **Action**: `search_topics`
- **Action id**: `github.search_topics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "search_topics"
```

## Run

```bash
oo connector run "github" --action "search_topics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
