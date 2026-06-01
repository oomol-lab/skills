# Dropbox · `list_shared_links`

List Dropbox shared links for the current user or a specific path.

- **Service**: `dropbox`
- **Action**: `list_shared_links`
- **Action id**: `dropbox.list_shared_links`
- **Required scopes**: sharing.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dropbox" --action "list_shared_links"
```

## Run

```bash
oo connector run "dropbox" --action "list_shared_links" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
