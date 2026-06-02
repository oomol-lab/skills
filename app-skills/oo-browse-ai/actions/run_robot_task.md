# Browse AI · `run_robot_task`

Start one Browse AI robot task with optional inputParameters overrides.

- **Service**: `browse_ai`
- **Action**: `run_robot_task`
- **Action id**: `browse_ai.run_robot_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browse_ai" --action "run_robot_task"
```

## Run

```bash
oo connector run "browse_ai" --action "run_robot_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
