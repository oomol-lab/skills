# Hacker News · `get_updates`

Get recently changed items and user profiles from Hacker News.

- **Service**: `hackernews`
- **Action**: `get_updates`
- **Action id**: `hackernews.get_updates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hackernews" --action "get_updates"
```

## Run

```bash
oo connector run "hackernews" --action "get_updates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
