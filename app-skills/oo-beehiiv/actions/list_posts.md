# Beehiiv · `list_posts`

List Beehiiv posts for a publication with documented filters and optional expansions.

- **Service**: `beehiiv`
- **Action**: `list_posts`
- **Action id**: `beehiiv.list_posts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beehiiv" --action "list_posts"
```

## Run

```bash
oo connector run "beehiiv" --action "list_posts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
