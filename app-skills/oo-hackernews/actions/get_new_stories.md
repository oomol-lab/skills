# Hacker News · `get_new_stories`

Get the newest story IDs from Hacker News.

- **Service**: `hackernews`
- **Action**: `get_new_stories`
- **Action id**: `hackernews.get_new_stories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hackernews" --action "get_new_stories"
```

## Run

```bash
oo connector run "hackernews" --action "get_new_stories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
