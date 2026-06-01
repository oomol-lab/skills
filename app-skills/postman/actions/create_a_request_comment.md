# Postman · `create_a_request_comment`

Tool to create a comment on a request. Use when you need to add a comment to a specific request within a collection or reply to an existing comment thread.

- **Service**: `postman`
- **Action**: `create_a_request_comment`
- **Action id**: `postman.create_a_request_comment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_a_request_comment"
```

## Run

```bash
oo connector run "postman" --action "create_a_request_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
