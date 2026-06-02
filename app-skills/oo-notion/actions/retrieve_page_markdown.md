# Notion · `retrieve_page_markdown`

Retrieve a Notion page or block subtree rendered as enhanced Markdown through the official page markdown API.

- **Service**: `notion`
- **Action**: `retrieve_page_markdown`
- **Action id**: `notion.retrieve_page_markdown`
- **Required scopes**: notion.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "retrieve_page_markdown"
```

## Run

```bash
oo connector run "notion" --action "retrieve_page_markdown" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
