# SmugMug · `get_folder_by_user_path`

Retrieve a SmugMug folder by user nickname and folder path.

- **Service**: `smugmug`
- **Action**: `get_folder_by_user_path`
- **Action id**: `smugmug.get_folder_by_user_path`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "smugmug" --action "get_folder_by_user_path"
```

## Run

```bash
oo connector run "smugmug" --action "get_folder_by_user_path" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
