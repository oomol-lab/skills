# ClickUp · `list_spaces`

List the ClickUp spaces available in a workspace.

- **Service**: `clickup`
- **Action**: `list_spaces`
- **Action id**: `clickup.list_spaces`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "list_spaces"
```

## Run

```bash
oo connector run "clickup" --action "list_spaces" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
