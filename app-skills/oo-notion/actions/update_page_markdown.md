# Notion · `update_page_markdown`

Update a Notion page's content as enhanced Markdown through the official page markdown API.

- **Service**: `notion`
- **Action**: `update_page_markdown`
- **Action id**: `notion.update_page_markdown`
- **Required scopes**: notion.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "update_page_markdown"
```

## Run

```bash
oo connector run "notion" --action "update_page_markdown" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Notion state. Confirm the exact payload and intended effect with the user before running.
