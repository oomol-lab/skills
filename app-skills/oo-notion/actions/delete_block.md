# Notion · `delete_block`

Archive a Notion block through the official delete endpoint.

- **Service**: `notion`
- **Action**: `delete_block`
- **Action id**: `notion.delete_block`
- **Required scopes**: notion.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "delete_block"
```

## Run

```bash
oo connector run "notion" --action "delete_block" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Notion data. Always confirm the target and get explicit user approval before running.
