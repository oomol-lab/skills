# Hacker News · `get_top_stories`

Get the top story IDs from Hacker News sorted by front page position.

- **Service**: `hackernews`
- **Action**: `get_top_stories`
- **Action id**: `hackernews.get_top_stories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hackernews" --action "get_top_stories"
```

## Run

```bash
oo connector run "hackernews" --action "get_top_stories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
