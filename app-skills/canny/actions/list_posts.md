# Canny · `list_posts`

List Canny posts with optional filtering, search, sorting, and pagination.

- **Service**: `canny`
- **Action**: `list_posts`
- **Action id**: `canny.list_posts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canny" --action "list_posts"
```

## Run

```bash
oo connector run "canny" --action "list_posts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
