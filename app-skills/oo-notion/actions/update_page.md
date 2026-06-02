# Notion · `update_page`

Update a Notion page's properties, title, icon, cover, trash status, or locked state.

- **Service**: `notion`
- **Action**: `update_page`
- **Action id**: `notion.update_page`
- **Required scopes**: notion.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "update_page"
```

## Run

```bash
oo connector run "notion" --action "update_page" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Notion state. Confirm the exact payload and intended effect with the user before running.
