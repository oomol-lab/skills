# Notion · `create_page`

Create a Notion page under a parent page, data source, or workspace-level private area. Use parentId + title for a simple child page under an existing page. Use parent with an official Notion parent payload for advanced cases: { page_id: "..." }, { data_source_id: "..." }, or { workspace: true } for OAuth public integrations. When parent is provided, do not use the top-level title field; provide the page title through properties.title instead. Internal integration secrets usually cannot create workspace-level private pages and should use a parent page or data source.

- **Service**: `notion`
- **Action**: `create_page`
- **Action id**: `notion.create_page`
- **Required scopes**: notion.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "create_page"
```

## Run

```bash
oo connector run "notion" --action "create_page" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Notion state. Confirm the exact payload and intended effect with the user before running.
