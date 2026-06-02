# Postman · `update_an_api`

Tool to update an existing API in Postman. Use when you need to modify the name, summary, or description of an API.

- **Service**: `postman`
- **Action**: `update_an_api`
- **Action id**: `postman.update_an_api`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "update_an_api"
```

## Run

```bash
oo connector run "postman" --action "update_an_api" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
