# Excel · `merge_cells`

Merge cells inside one worksheet range.

- **Service**: `excel`
- **Action**: `merge_cells`
- **Action id**: `excel.merge_cells`
- **Required scopes**: excel.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "merge_cells"
```

## Run

```bash
oo connector run "excel" --action "merge_cells" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Excel state. Confirm the exact payload and intended effect with the user before running.
