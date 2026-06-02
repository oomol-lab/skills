# ClickUp · `get_view`

Get a ClickUp view by view ID.

- **Service**: `clickup`
- **Action**: `get_view`
- **Action id**: `clickup.get_view`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "get_view"
```

## Run

```bash
oo connector run "clickup" --action "get_view" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
