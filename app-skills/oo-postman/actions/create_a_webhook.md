# Postman · `create_a_webhook`

Tool to create a webhook that triggers a collection with a custom payload. Use when you need to set up a webhook endpoint that can trigger a Postman collection run. The webhook URL is available in the webhookUrl property of the response.

- **Service**: `postman`
- **Action**: `create_a_webhook`
- **Action id**: `postman.create_a_webhook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_a_webhook"
```

## Run

```bash
oo connector run "postman" --action "create_a_webhook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
