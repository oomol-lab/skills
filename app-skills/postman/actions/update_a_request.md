# Postman · `update_a_request`

Tool to update a request in a Postman collection. Use when you need to modify an existing request's name, method, URL, headers, or body following the Postman Collection Format.

- **Service**: `postman`
- **Action**: `update_a_request`
- **Action id**: `postman.update_a_request`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "update_a_request"
```

## Run

```bash
oo connector run "postman" --action "update_a_request" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
