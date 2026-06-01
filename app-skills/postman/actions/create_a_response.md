# Postman · `create_a_response`

Tool to create a request response in a Postman collection. Use when you need to add a saved response example to a specific request in a collection.

- **Service**: `postman`
- **Action**: `create_a_response`
- **Action id**: `postman.create_a_response`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_a_response"
```

## Run

```bash
oo connector run "postman" --action "create_a_response" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
