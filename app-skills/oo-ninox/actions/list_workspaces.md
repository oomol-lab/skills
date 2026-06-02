# Ninox · `list_workspaces`

List Ninox workspaces available to the authenticated Personal Access Token.

- **Service**: `ninox`
- **Action**: `list_workspaces`
- **Action id**: `ninox.list_workspaces`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ninox" --action "list_workspaces"
```

## Run

```bash
oo connector run "ninox" --action "list_workspaces" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
