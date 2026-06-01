# StackAI · `get_run_metadata`

Fetch metadata for one previously started Stack AI run.

- **Service**: `stack_ai`
- **Action**: `get_run_metadata`
- **Action id**: `stack_ai.get_run_metadata`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stack_ai" --action "get_run_metadata"
```

## Run

```bash
oo connector run "stack_ai" --action "get_run_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
