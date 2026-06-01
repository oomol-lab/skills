# ClickUp · `get_folder`

Get a ClickUp folder by folder ID.

- **Service**: `clickup`
- **Action**: `get_folder`
- **Action id**: `clickup.get_folder`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "get_folder"
```

## Run

```bash
oo connector run "clickup" --action "get_folder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
