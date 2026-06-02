# ClickUp · `get_folder_custom_fields`

Get the ClickUp custom fields available on a folder.

- **Service**: `clickup`
- **Action**: `get_folder_custom_fields`
- **Action id**: `clickup.get_folder_custom_fields`
- **Required scopes**: clickup.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "get_folder_custom_fields"
```

## Run

```bash
oo connector run "clickup" --action "get_folder_custom_fields" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
