# Postman · `create_a_fork2`

Tool to create a fork from an existing environment into a workspace. Use when you need to fork an environment to a specified workspace.

- **Service**: `postman`
- **Action**: `create_a_fork2`
- **Action id**: `postman.create_a_fork2`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_a_fork2"
```

## Run

```bash
oo connector run "postman" --action "create_a_fork2" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
