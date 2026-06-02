# Vimeo · `get_folder`

Get metadata for a Vimeo folder.

- **Service**: `vimeo`
- **Action**: `get_folder`
- **Action id**: `vimeo.get_folder`
- **Required scopes**: vimeo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "get_folder"
```

## Run

```bash
oo connector run "vimeo" --action "get_folder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
