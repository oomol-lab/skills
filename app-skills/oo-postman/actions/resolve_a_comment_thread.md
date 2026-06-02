# Postman · `resolve_a_comment_thread`

Tool to resolve a comment thread and any associated replies. Use when you need to mark a comment thread as resolved. On success, this returns an HTTP 204 No Content response.

- **Service**: `postman`
- **Action**: `resolve_a_comment_thread`
- **Action id**: `postman.resolve_a_comment_thread`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "resolve_a_comment_thread"
```

## Run

```bash
oo connector run "postman" --action "resolve_a_comment_thread" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
