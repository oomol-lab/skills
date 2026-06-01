# Beamer · `count_unread_posts`

Count unread Beamer posts for one end-user context.

- **Service**: `beamer`
- **Action**: `count_unread_posts`
- **Action id**: `beamer.count_unread_posts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beamer" --action "count_unread_posts"
```

## Run

```bash
oo connector run "beamer" --action "count_unread_posts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
