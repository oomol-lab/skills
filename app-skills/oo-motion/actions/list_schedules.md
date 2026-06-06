# Motion · `list_schedules`

List Motion schedules for a workspace.

- **Service**: `motion`
- **Action**: `list_schedules`
- **Action id**: `motion.list_schedules`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "motion" --action "list_schedules"
```

## Run

```bash
oo connector run "motion" --action "list_schedules" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
