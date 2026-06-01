# Asana · `update_task`

Update an existing Asana task by gid.

- **Service**: `asana`
- **Action**: `update_task`
- **Action id**: `asana.update_task`
- **Required scopes**: tasks:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "asana" --action "update_task"
```

## Run

```bash
oo connector run "asana" --action "update_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Asana state. Confirm the exact payload and intended effect with the user before running.
