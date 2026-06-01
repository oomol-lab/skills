# SmugMug · `get_folder_subfolders`

List the direct subfolders under a SmugMug folder path.

- **Service**: `smugmug`
- **Action**: `get_folder_subfolders`
- **Action id**: `smugmug.get_folder_subfolders`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "smugmug" --action "get_folder_subfolders"
```

## Run

```bash
oo connector run "smugmug" --action "get_folder_subfolders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
