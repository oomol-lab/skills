# Notion · `update_database`

Update a Notion database container's parent, title, description, icon, cover, inline display, trash status, or locked state.

- **Service**: `notion`
- **Action**: `update_database`
- **Action id**: `notion.update_database`
- **Required scopes**: notion.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "update_database"
```

## Run

```bash
oo connector run "notion" --action "update_database" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Notion state. Confirm the exact payload and intended effect with the user before running.
