# Toggl Track · `get_project`

Get a single Toggl Track project by ID.

- **Service**: `toggl`
- **Action**: `get_project`
- **Action id**: `toggl.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "toggl" --action "get_project"
```

## Run

```bash
oo connector run "toggl" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
