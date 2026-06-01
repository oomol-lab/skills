# Typeform · `get_workspace`

Get one Typeform workspace by workspace ID.

- **Service**: `typeform`
- **Action**: `get_workspace`
- **Action id**: `typeform.get_workspace`
- **Required scopes**: workspaces:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "typeform" --action "get_workspace"
```

## Run

```bash
oo connector run "typeform" --action "get_workspace" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
