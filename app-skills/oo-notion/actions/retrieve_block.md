# Notion · `retrieve_block`

Retrieve a Notion block by block ID.

- **Service**: `notion`
- **Action**: `retrieve_block`
- **Action id**: `notion.retrieve_block`
- **Required scopes**: notion.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "retrieve_block"
```

## Run

```bash
oo connector run "notion" --action "retrieve_block" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
