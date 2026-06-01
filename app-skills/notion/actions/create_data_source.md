# Notion · `create_data_source`

Create a Notion data source under a parent database with a properties schema.

- **Service**: `notion`
- **Action**: `create_data_source`
- **Action id**: `notion.create_data_source`
- **Required scopes**: notion.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "create_data_source"
```

## Run

```bash
oo connector run "notion" --action "create_data_source" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Notion state. Confirm the exact payload and intended effect with the user before running.
