# Clockify · `list_workspaces`

List the Clockify workspaces available to the authenticated user.

- **Service**: `clockify`
- **Action**: `list_workspaces`
- **Action id**: `clockify.list_workspaces`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clockify" --action "list_workspaces"
```

## Run

```bash
oo connector run "clockify" --action "list_workspaces" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
