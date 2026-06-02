# Excel · `create_session`

Create an Excel workbook session for subsequent workbook operations.

- **Service**: `excel`
- **Action**: `create_session`
- **Action id**: `excel.create_session`
- **Required scopes**: excel.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "create_session"
```

## Run

```bash
oo connector run "excel" --action "create_session" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Excel state. Confirm the exact payload and intended effect with the user before running.
