# ClickUp · `add_dependency`

Add a ClickUp dependency relationship to a task.

- **Service**: `clickup`
- **Action**: `add_dependency`
- **Action id**: `clickup.add_dependency`
- **Required scopes**: clickup.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clickup" --action "add_dependency"
```

## Run

```bash
oo connector run "clickup" --action "add_dependency" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ClickUp state. Confirm the exact payload and intended effect with the user before running.
