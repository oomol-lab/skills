# Seqera · `list_user_workspaces`

List the workspaces and organizations visible to the current Seqera user.

- **Service**: `seqera`
- **Action**: `list_user_workspaces`
- **Action id**: `seqera.list_user_workspaces`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "seqera" --action "list_user_workspaces"
```

## Run

```bash
oo connector run "seqera" --action "list_user_workspaces" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
