# Postman · `create_a_request`

Tool to create a new request in a Postman collection. Use when you need to add a request to an existing collection with specified method, URL, headers, and body.

- **Service**: `postman`
- **Action**: `create_a_request`
- **Action id**: `postman.create_a_request`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_a_request"
```

## Run

```bash
oo connector run "postman" --action "create_a_request" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
