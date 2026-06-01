# Postman · `create_a_server_response`

Tool to create a server response on a Postman mock server. Use when you need to simulate 5xx server-level responses (500, 503, etc.) for testing error conditions.

- **Service**: `postman`
- **Action**: `create_a_server_response`
- **Action id**: `postman.create_a_server_response`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_a_server_response"
```

## Run

```bash
oo connector run "postman" --action "create_a_server_response" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
