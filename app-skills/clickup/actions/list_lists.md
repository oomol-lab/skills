# ClickUp · `list_lists`

List the ClickUp lists available in a folder.

- **Service**: `clickup`
- **Action**: `list_lists`
- **Action id**: `clickup.list_lists`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "list_lists"
```

## Run

```bash
oo connector run "clickup" --action "list_lists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
