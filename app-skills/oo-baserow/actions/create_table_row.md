# Baserow · `create_table_row`

Create one row in a Baserow table.

- **Service**: `baserow`
- **Action**: `create_table_row`
- **Action id**: `baserow.create_table_row`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "baserow" --action "create_table_row"
```

## Run

```bash
oo connector run "baserow" --action "create_table_row" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Baserow state. Confirm the exact payload and intended effect with the user before running.
