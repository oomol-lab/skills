# Canny · `list_boards`

List all Canny boards available to the authenticated workspace.

- **Service**: `canny`
- **Action**: `list_boards`
- **Action id**: `canny.list_boards`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canny" --action "list_boards"
```

## Run

```bash
oo connector run "canny" --action "list_boards" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
