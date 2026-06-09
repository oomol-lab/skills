# Motion · `get_task`

Get a Motion task by ID.

- **Service**: `motion`
- **Action**: `get_task`
- **Action id**: `motion.get_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "motion" --action "get_task"
```

## Run

```bash
oo connector run "motion" --action "get_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
