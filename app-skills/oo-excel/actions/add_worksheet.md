# Excel · `add_worksheet`

Add a new worksheet to a workbook.

- **Service**: `excel`
- **Action**: `add_worksheet`
- **Action id**: `excel.add_worksheet`
- **Required scopes**: excel.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "add_worksheet"
```

## Run

```bash
oo connector run "excel" --action "add_worksheet" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Excel state. Confirm the exact payload and intended effect with the user before running.
