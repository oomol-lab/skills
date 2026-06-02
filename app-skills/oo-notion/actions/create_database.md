# Notion · `create_database`

Create a Notion database container under a parent page or workspace, optionally with an initial data source.

- **Service**: `notion`
- **Action**: `create_database`
- **Action id**: `notion.create_database`
- **Required scopes**: notion.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "create_database"
```

## Run

```bash
oo connector run "notion" --action "create_database" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Notion state. Confirm the exact payload and intended effect with the user before running.
