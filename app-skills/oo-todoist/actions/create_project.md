# Todoist · `create_project`

Create a Todoist project with optional description, color, parent, view style, and workspace placement.

- **Service**: `todoist`
- **Action**: `create_project`
- **Action id**: `todoist.create_project`
- **Required scopes**: todoist.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "todoist" --action "create_project"
```

## Run

```bash
oo connector run "todoist" --action "create_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Todoist state. Confirm the exact payload and intended effect with the user before running.
