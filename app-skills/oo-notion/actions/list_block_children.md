# Notion · `list_block_children`

List the direct child blocks under a Notion block with pagination.

- **Service**: `notion`
- **Action**: `list_block_children`
- **Action id**: `notion.list_block_children`
- **Required scopes**: notion.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "list_block_children"
```

## Run

```bash
oo connector run "notion" --action "list_block_children" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
