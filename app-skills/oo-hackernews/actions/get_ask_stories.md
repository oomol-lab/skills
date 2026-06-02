# Hacker News · `get_ask_stories`

Get the latest Ask HN story IDs from Hacker News.

- **Service**: `hackernews`
- **Action**: `get_ask_stories`
- **Action id**: `hackernews.get_ask_stories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hackernews" --action "get_ask_stories"
```

## Run

```bash
oo connector run "hackernews" --action "get_ask_stories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
