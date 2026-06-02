# Notion · `retrieve_page`

Retrieve a Notion page's properties and metadata by page ID. This does not include child block content.

- **Service**: `notion`
- **Action**: `retrieve_page`
- **Action id**: `notion.retrieve_page`
- **Required scopes**: notion.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "retrieve_page"
```

## Run

```bash
oo connector run "notion" --action "retrieve_page" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
