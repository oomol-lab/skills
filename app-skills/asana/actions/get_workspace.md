# Asana · `get_workspace`

Get a single Asana workspace by gid.

- **Service**: `asana`
- **Action**: `get_workspace`
- **Action id**: `asana.get_workspace`
- **Required scopes**: workspaces:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "asana" --action "get_workspace"
```

## Run

```bash
oo connector run "asana" --action "get_workspace" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
