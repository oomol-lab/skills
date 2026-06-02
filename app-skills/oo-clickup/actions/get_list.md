# ClickUp · `get_list`

Get a ClickUp list by list ID.

- **Service**: `clickup`
- **Action**: `get_list`
- **Action id**: `clickup.get_list`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "get_list"
```

## Run

```bash
oo connector run "clickup" --action "get_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
