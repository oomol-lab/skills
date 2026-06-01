# Vimeo · `list_folders`

List folders that belong to the authenticated user or to a specified Vimeo user.

- **Service**: `vimeo`
- **Action**: `list_folders`
- **Action id**: `vimeo.list_folders`
- **Required scopes**: vimeo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "list_folders"
```

## Run

```bash
oo connector run "vimeo" --action "list_folders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
