# Postman · `update_a_mock_server`

Tool to update an existing mock server. Use when you need to change a mock server's name, collection, environment, or privacy settings. The collection UID is required for all updates.

- **Service**: `postman`
- **Action**: `update_a_mock_server`
- **Action id**: `postman.update_a_mock_server`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "update_a_mock_server"
```

## Run

```bash
oo connector run "postman" --action "update_a_mock_server" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
