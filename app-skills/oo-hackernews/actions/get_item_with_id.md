# Hacker News · `get_item_with_id`

Get a Hacker News item with a bounded nested comment tree.

- **Service**: `hackernews`
- **Action**: `get_item_with_id`
- **Action id**: `hackernews.get_item_with_id`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hackernews" --action "get_item_with_id"
```

## Run

```bash
oo connector run "hackernews" --action "get_item_with_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
