# Notion · `update_data_source`

Update a Notion data source's title, icon, properties schema, parent, or trash status.

- **Service**: `notion`
- **Action**: `update_data_source`
- **Action id**: `notion.update_data_source`
- **Required scopes**: notion.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "update_data_source"
```

## Run

```bash
oo connector run "notion" --action "update_data_source" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Notion state. Confirm the exact payload and intended effect with the user before running.
