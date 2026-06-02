# Seqera · `get_workspace`

Retrieve one Seqera workspace by organization ID and workspace ID.

- **Service**: `seqera`
- **Action**: `get_workspace`
- **Action id**: `seqera.get_workspace`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "seqera" --action "get_workspace"
```

## Run

```bash
oo connector run "seqera" --action "get_workspace" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
