# Excel · `delete_worksheet`

Delete one worksheet from a workbook.

- **Service**: `excel`
- **Action**: `delete_worksheet`
- **Action id**: `excel.delete_worksheet`
- **Required scopes**: excel.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "delete_worksheet"
```

## Run

```bash
oo connector run "excel" --action "delete_worksheet" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Excel data. Always confirm the target and get explicit user approval before running.
