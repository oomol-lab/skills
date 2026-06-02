# Seqera · `list_pipelines`

List Seqera pipelines in the current user context or a specific workspace.

- **Service**: `seqera`
- **Action**: `list_pipelines`
- **Action id**: `seqera.list_pipelines`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "seqera" --action "list_pipelines"
```

## Run

```bash
oo connector run "seqera" --action "list_pipelines" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
