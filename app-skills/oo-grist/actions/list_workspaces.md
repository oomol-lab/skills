# Grist · `list_workspaces`

List the Grist workspaces and documents that the authenticated API key can access on the current Grist site.

- **Service**: `grist`
- **Action**: `list_workspaces`
- **Action id**: `grist.list_workspaces`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "grist" --action "list_workspaces"
```

## Run

```bash
oo connector run "grist" --action "list_workspaces" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
