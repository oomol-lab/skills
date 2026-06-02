# Manus · `create_task`

Create a new asynchronous Manus task from a message and optional project, connector, skill, sharing, or structured-output settings.

- **Service**: `manus`
- **Action**: `create_task`
- **Action id**: `manus.create_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "manus" --action "create_task"
```

## Run

```bash
oo connector run "manus" --action "create_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Manus state. Confirm the exact payload and intended effect with the user before running.
