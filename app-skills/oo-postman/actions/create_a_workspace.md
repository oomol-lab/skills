# Postman · `create_a_workspace`

Tool to create a new workspace in Postman. Use when you need to create a workspace with a specified name, type (personal, team, private, or public), and optional description. Returns the created workspace's ID, name, and type upon successful creation.

- **Service**: `postman`
- **Action**: `create_a_workspace`
- **Action id**: `postman.create_a_workspace`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_a_workspace"
```

## Run

```bash
oo connector run "postman" --action "create_a_workspace" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
