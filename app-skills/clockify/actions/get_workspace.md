# Clockify · `get_workspace`

Get a single Clockify workspace by ID.

- **Service**: `clockify`
- **Action**: `get_workspace`
- **Action id**: `clockify.get_workspace`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clockify" --action "get_workspace"
```

## Run

```bash
oo connector run "clockify" --action "get_workspace" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
