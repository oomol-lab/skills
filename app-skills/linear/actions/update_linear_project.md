# Linear · `update_linear_project`

Update an existing Linear project.

- **Service**: `linear`
- **Action**: `update_linear_project`
- **Action id**: `linear.update_linear_project`
- **Required scopes**: linear.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "update_linear_project"
```

## Run

```bash
oo connector run "linear" --action "update_linear_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Linear state. Confirm the exact payload and intended effect with the user before running.
