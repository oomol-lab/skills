# ClickUp · `list_folders`

List the ClickUp folders available in a space.

- **Service**: `clickup`
- **Action**: `list_folders`
- **Action id**: `clickup.list_folders`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "list_folders"
```

## Run

```bash
oo connector run "clickup" --action "list_folders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
