# Motion · `list_statuses`

List Motion statuses for a workspace.

- **Service**: `motion`
- **Action**: `list_statuses`
- **Action id**: `motion.list_statuses`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "motion" --action "list_statuses"
```

## Run

```bash
oo connector run "motion" --action "list_statuses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
