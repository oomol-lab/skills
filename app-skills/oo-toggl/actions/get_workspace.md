# Toggl Track · `get_workspace`

Get a single Toggl Track workspace by ID.

- **Service**: `toggl`
- **Action**: `get_workspace`
- **Action id**: `toggl.get_workspace`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "toggl" --action "get_workspace"
```

## Run

```bash
oo connector run "toggl" --action "get_workspace" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
