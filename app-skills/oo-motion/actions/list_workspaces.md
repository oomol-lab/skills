# Motion · `list_workspaces`

List Motion workspaces available to the API key.

- **Service**: `motion`
- **Action**: `list_workspaces`
- **Action id**: `motion.list_workspaces`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "motion" --action "list_workspaces"
```

## Run

```bash
oo connector run "motion" --action "list_workspaces" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
