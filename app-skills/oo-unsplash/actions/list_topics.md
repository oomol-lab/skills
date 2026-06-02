# Unsplash · `list_topics`

List topics curated by Unsplash.

- **Service**: `unsplash`
- **Action**: `list_topics`
- **Action id**: `unsplash.list_topics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "unsplash" --action "list_topics"
```

## Run

```bash
oo connector run "unsplash" --action "list_topics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
