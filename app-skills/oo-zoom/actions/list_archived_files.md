# Zoom · `list_archived_files`

List archived Zoom meeting and webinar files for a short official date window.

- **Service**: `zoom`
- **Action**: `list_archived_files`
- **Action id**: `zoom.list_archived_files`
- **Required scopes**: archiving:read:list_archived_files:master

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zoom" --action "list_archived_files"
```

## Run

```bash
oo connector run "zoom" --action "list_archived_files" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
