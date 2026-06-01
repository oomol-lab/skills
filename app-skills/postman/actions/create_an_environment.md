# Postman · `create_an_environment`

Tool to create a new environment in a Postman workspace. Use when you need to create a new environment with variables for different settings (development, production, testing, etc.). Returns the created environment's ID, name, and UID upon successful creation.

- **Service**: `postman`
- **Action**: `create_an_environment`
- **Action id**: `postman.create_an_environment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_an_environment"
```

## Run

```bash
oo connector run "postman" --action "create_an_environment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
