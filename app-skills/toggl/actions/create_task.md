# Toggl Track · `create_task`

Create a new Toggl Track task inside a project.

- **Service**: `toggl`
- **Action**: `create_task`
- **Action id**: `toggl.create_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "toggl" --action "create_task"
```

## Run

```bash
oo connector run "toggl" --action "create_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Toggl Track state. Confirm the exact payload and intended effect with the user before running.
