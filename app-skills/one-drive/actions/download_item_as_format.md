# OneDrive · `download_item_as_format`

Download one drive item after converting it to a supported Microsoft Graph format.

- **Service**: `one_drive`
- **Action**: `download_item_as_format`
- **Action id**: `one_drive.download_item_as_format`
- **Required scopes**: one_drive.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "one_drive" --action "download_item_as_format"
```

## Run

```bash
oo connector run "one_drive" --action "download_item_as_format" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
