# ClickUp · `get_list_views`

Get the ClickUp views available on a list.

- **Service**: `clickup`
- **Action**: `get_list_views`
- **Action id**: `clickup.get_list_views`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "get_list_views"
```

## Run

```bash
oo connector run "clickup" --action "get_list_views" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
