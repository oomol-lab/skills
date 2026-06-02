# Postman · `publish_a_mock_server`

Tool to publish a mock server in Postman. Use when you need to make a mock server publicly accessible. Publishing sets the mock server's Access Control configuration to public.

- **Service**: `postman`
- **Action**: `publish_a_mock_server`
- **Action id**: `postman.publish_a_mock_server`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "publish_a_mock_server"
```

## Run

```bash
oo connector run "postman" --action "publish_a_mock_server" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
