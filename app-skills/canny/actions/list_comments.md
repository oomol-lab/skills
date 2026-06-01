# Canny · `list_comments`

List Canny comments with optional filtering and pagination.

- **Service**: `canny`
- **Action**: `list_comments`
- **Action id**: `canny.list_comments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canny" --action "list_comments"
```

## Run

```bash
oo connector run "canny" --action "list_comments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
