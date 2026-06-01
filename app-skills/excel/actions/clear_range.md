# Excel · `clear_range`

Clear one worksheet range.

- **Service**: `excel`
- **Action**: `clear_range`
- **Action id**: `excel.clear_range`
- **Required scopes**: excel.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "clear_range"
```

## Run

```bash
oo connector run "excel" --action "clear_range" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Excel data. Always confirm the target and get explicit user approval before running.
