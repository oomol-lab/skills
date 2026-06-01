# Notion · `update_block`

Update a Notion block using raw block fields, including block-type payloads and optional trash state.

- **Service**: `notion`
- **Action**: `update_block`
- **Action id**: `notion.update_block`
- **Required scopes**: notion.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "update_block"
```

## Run

```bash
oo connector run "notion" --action "update_block" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Notion state. Confirm the exact payload and intended effect with the user before running.
