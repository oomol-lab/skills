# Goody · `list_workspaces`

List Goody workspaces available to the current account.

- **Service**: `goody`
- **Action**: `list_workspaces`
- **Action id**: `goody.list_workspaces`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "goody" --action "list_workspaces"
```

## Run

```bash
oo connector run "goody" --action "list_workspaces" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
