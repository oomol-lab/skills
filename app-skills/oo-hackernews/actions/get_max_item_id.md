# Hacker News · `get_max_item_id`

Get the current largest Hacker News item ID.

- **Service**: `hackernews`
- **Action**: `get_max_item_id`
- **Action id**: `hackernews.get_max_item_id`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hackernews" --action "get_max_item_id"
```

## Run

```bash
oo connector run "hackernews" --action "get_max_item_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
