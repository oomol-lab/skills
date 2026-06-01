# Seqera · `list_workflows`

List Seqera workflow runs in the current user context or a specific workspace.

- **Service**: `seqera`
- **Action**: `list_workflows`
- **Action id**: `seqera.list_workflows`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "seqera" --action "list_workflows"
```

## Run

```bash
oo connector run "seqera" --action "list_workflows" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
