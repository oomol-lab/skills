# Postman · `update_a_response`

Tool to update a response in a Postman collection. Use when you need to modify properties of an existing saved response example such as name, status, code, headers, cookies, or body.

- **Service**: `postman`
- **Action**: `update_a_response`
- **Action id**: `postman.update_a_response`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "update_a_response"
```

## Run

```bash
oo connector run "postman" --action "update_a_response" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
