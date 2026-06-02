# Postman · `update_a_requests_comment`

Tool to update a comment on a request. Use when you need to modify the text content of an existing comment on a specific request within a collection.

- **Service**: `postman`
- **Action**: `update_a_requests_comment`
- **Action id**: `postman.update_a_requests_comment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "update_a_requests_comment"
```

## Run

```bash
oo connector run "postman" --action "update_a_requests_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
