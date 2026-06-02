# Excel · `insert_range`

Insert one worksheet range and shift existing cells to make space.

- **Service**: `excel`
- **Action**: `insert_range`
- **Action id**: `excel.insert_range`
- **Required scopes**: excel.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "insert_range"
```

## Run

```bash
oo connector run "excel" --action "insert_range" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Excel state. Confirm the exact payload and intended effect with the user before running.
