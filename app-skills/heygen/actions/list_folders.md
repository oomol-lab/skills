# HeyGen · `list_folders`

List HeyGen folders and folder IDs that can be used with HeyGen video generation inputs.

- **Service**: `heygen`
- **Action**: `list_folders`
- **Action id**: `heygen.list_folders`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heygen" --action "list_folders"
```

## Run

```bash
oo connector run "heygen" --action "list_folders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
