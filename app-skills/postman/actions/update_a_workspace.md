# Postman · `update_a_workspace`

Tool to update an existing workspace in Postman. Use when you need to modify the name, type, or description of a workspace. The 'type' field is required for all updates.

- **Service**: `postman`
- **Action**: `update_a_workspace`
- **Action id**: `postman.update_a_workspace`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "update_a_workspace"
```

## Run

```bash
oo connector run "postman" --action "update_a_workspace" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
