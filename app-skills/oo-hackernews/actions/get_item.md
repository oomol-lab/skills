# Hacker News · `get_item`

Get a Hacker News item by its numeric ID.

- **Service**: `hackernews`
- **Action**: `get_item`
- **Action id**: `hackernews.get_item`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hackernews" --action "get_item"
```

## Run

```bash
oo connector run "hackernews" --action "get_item" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
