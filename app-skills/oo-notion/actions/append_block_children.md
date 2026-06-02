# Notion · `append_block_children`

Append raw Notion child blocks to an existing parent block, using the official block-children append API.

- **Service**: `notion`
- **Action**: `append_block_children`
- **Action id**: `notion.append_block_children`
- **Required scopes**: notion.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "append_block_children"
```

## Run

```bash
oo connector run "notion" --action "append_block_children" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
