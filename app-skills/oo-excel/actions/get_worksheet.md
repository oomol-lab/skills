# Excel · `get_worksheet`

Read a single worksheet by worksheet name or worksheet ID.

- **Service**: `excel`
- **Action**: `get_worksheet`
- **Action id**: `excel.get_worksheet`
- **Required scopes**: excel.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "excel" --action "get_worksheet"
```

## Run

```bash
oo connector run "excel" --action "get_worksheet" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
