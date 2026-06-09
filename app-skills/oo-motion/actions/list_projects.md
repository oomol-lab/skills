# Motion · `list_projects`

List Motion projects for a workspace.

- **Service**: `motion`
- **Action**: `list_projects`
- **Action id**: `motion.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "motion" --action "list_projects"
```

## Run

```bash
oo connector run "motion" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
