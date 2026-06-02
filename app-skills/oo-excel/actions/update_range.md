# Excel · `update_range`

Update one worksheet range with values, formulas, formats, or visibility flags.

- **Service**: `excel`
- **Action**: `update_range`
- **Action id**: `excel.update_range`
- **Required scopes**: excel.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "update_range"
```

## Run

```bash
oo connector run "excel" --action "update_range" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Excel state. Confirm the exact payload and intended effect with the user before running.
