# Notion · `retrieve_page_property`

Retrieve a specific property item from a Notion page by page ID and property ID. Title, rich_text, relation, and people properties return the paginated list response with type property_item.

- **Service**: `notion`
- **Action**: `retrieve_page_property`
- **Action id**: `notion.retrieve_page_property`
- **Required scopes**: notion.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "retrieve_page_property"
```

## Run

```bash
oo connector run "notion" --action "retrieve_page_property" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
