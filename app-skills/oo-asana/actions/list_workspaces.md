# Asana · `list_workspaces`

List the Asana workspaces visible to the connected personal access token.

- **Service**: `asana`
- **Action**: `list_workspaces`
- **Action id**: `asana.list_workspaces`
- **Required scopes**: workspaces:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "asana" --action "list_workspaces"
```

## Run

```bash
oo connector run "asana" --action "list_workspaces" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
