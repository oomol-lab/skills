# StackAI · `run_flow`

Run a deployed Stack AI flow with JSON variables and return its normalized result.

- **Service**: `stack_ai`
- **Action**: `run_flow`
- **Action id**: `stack_ai.run_flow`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stack_ai" --action "run_flow"
```

## Run

```bash
oo connector run "stack_ai" --action "run_flow" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
