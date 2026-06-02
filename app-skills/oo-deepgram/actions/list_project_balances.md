# Deepgram · `list_project_balances`

List the outstanding balances for a Deepgram project.

- **Service**: `deepgram`
- **Action**: `list_project_balances`
- **Action id**: `deepgram.list_project_balances`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "deepgram" --action "list_project_balances"
```

## Run

```bash
oo connector run "deepgram" --action "list_project_balances" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
