# Notion · `append_block`

Append a single paragraph block to a Notion page. This is a simplified compatibility helper over `append_block_children`.

- **Service**: `notion`
- **Action**: `append_block`
- **Action id**: `notion.append_block`
- **Required scopes**: notion.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "append_block"
```

## Run

```bash
oo connector run "notion" --action "append_block" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
