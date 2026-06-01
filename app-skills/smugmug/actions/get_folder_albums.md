# SmugMug · `get_folder_albums`

List the direct albums under a SmugMug folder path.

- **Service**: `smugmug`
- **Action**: `get_folder_albums`
- **Action id**: `smugmug.get_folder_albums`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "smugmug" --action "get_folder_albums"
```

## Run

```bash
oo connector run "smugmug" --action "get_folder_albums" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
