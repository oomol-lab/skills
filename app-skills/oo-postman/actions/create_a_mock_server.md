# Postman · `create_a_mock_server`

Tool to create a new mock server in a Postman collection. Use when you need to create a mock server to simulate API endpoints for testing or development. Returns the created mock server's details including the mockUrl which can be used to make requests.

- **Service**: `postman`
- **Action**: `create_a_mock_server`
- **Action id**: `postman.create_a_mock_server`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_a_mock_server"
```

## Run

```bash
oo connector run "postman" --action "create_a_mock_server" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
