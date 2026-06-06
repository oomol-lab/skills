# Motion · `get_project`

Get a Motion project by ID.

- **Service**: `motion`
- **Action**: `get_project`
- **Action id**: `motion.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "motion" --action "get_project"
```

## Run

```bash
oo connector run "motion" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
