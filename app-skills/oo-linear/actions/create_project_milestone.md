# Linear · `create_project_milestone`

Creates a project milestone for the specified Linear project.

- **Service**: `linear`
- **Action**: `create_project_milestone`
- **Action id**: `linear.create_project_milestone`
- **Required scopes**: linear.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "create_project_milestone"
```

## Run

```bash
oo connector run "linear" --action "create_project_milestone" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Linear state. Confirm the exact payload and intended effect with the user before running.
