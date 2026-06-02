# Clockify · `get_project`

Get a single Clockify project by ID.

- **Service**: `clockify`
- **Action**: `get_project`
- **Action id**: `clockify.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clockify" --action "get_project"
```

## Run

```bash
oo connector run "clockify" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
