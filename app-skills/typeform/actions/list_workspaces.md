# Typeform · `list_workspaces`

List workspaces available to the authenticated Typeform account.

- **Service**: `typeform`
- **Action**: `list_workspaces`
- **Action id**: `typeform.list_workspaces`
- **Required scopes**: workspaces:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "typeform" --action "list_workspaces"
```

## Run

```bash
oo connector run "typeform" --action "list_workspaces" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
