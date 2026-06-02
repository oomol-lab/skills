# Postman · `create_an_api`

Tool to create a new API in Postman. Use when you need to create an API with a name, summary, and description in your Postman workspace.

- **Service**: `postman`
- **Action**: `create_an_api`
- **Action id**: `postman.create_an_api`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_an_api"
```

## Run

```bash
oo connector run "postman" --action "create_an_api" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
