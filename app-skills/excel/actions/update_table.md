# Excel · `update_table`

Update table metadata such as the name, style, or header flags.

- **Service**: `excel`
- **Action**: `update_table`
- **Action id**: `excel.update_table`
- **Required scopes**: excel.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "update_table"
```

## Run

```bash
oo connector run "excel" --action "update_table" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Excel state. Confirm the exact payload and intended effect with the user before running.
