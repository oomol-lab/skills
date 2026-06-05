# Dub · `list_folders`

List folders in the authenticated Dub workspace.

- **Service**: `dub`
- **Action**: `list_folders`
- **Action id**: `dub.list_folders`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dub" --action "list_folders"
```

## Run

```bash
oo connector run "dub" --action "list_folders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
