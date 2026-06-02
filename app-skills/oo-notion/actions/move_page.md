# Notion · `move_page`

Move a Notion page under another page or under a data source through the official page move API.

- **Service**: `notion`
- **Action**: `move_page`
- **Action id**: `notion.move_page`
- **Required scopes**: notion.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "move_page"
```

## Run

```bash
oo connector run "notion" --action "move_page" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Notion state. Confirm the exact payload and intended effect with the user before running.
