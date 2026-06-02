# Seqera · `get_workflow`

Retrieve one Seqera workflow run by workflow ID.

- **Service**: `seqera`
- **Action**: `get_workflow`
- **Action id**: `seqera.get_workflow`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "seqera" --action "get_workflow"
```

## Run

```bash
oo connector run "seqera" --action "get_workflow" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
