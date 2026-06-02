# Hacker News · `get_best_stories`

Get the best story IDs from Hacker News ranked by score.

- **Service**: `hackernews`
- **Action**: `get_best_stories`
- **Action id**: `hackernews.get_best_stories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hackernews" --action "get_best_stories"
```

## Run

```bash
oo connector run "hackernews" --action "get_best_stories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
