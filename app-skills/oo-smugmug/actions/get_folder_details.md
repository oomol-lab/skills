# SmugMug · `get_folder_details`

Retrieve folder details for a SmugMug folder node by node ID.

- **Service**: `smugmug`
- **Action**: `get_folder_details`
- **Action id**: `smugmug.get_folder_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "smugmug" --action "get_folder_details"
```

## Run

```bash
oo connector run "smugmug" --action "get_folder_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
