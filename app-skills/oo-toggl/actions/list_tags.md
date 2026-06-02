# Toggl Track · `list_tags`

List Toggl Track tags in a workspace.

- **Service**: `toggl`
- **Action**: `list_tags`
- **Action id**: `toggl.list_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "toggl" --action "list_tags"
```

## Run

```bash
oo connector run "toggl" --action "list_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
