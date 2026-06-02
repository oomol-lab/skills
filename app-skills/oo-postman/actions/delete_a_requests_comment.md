# Postman · `delete_a_requests_comment`

Tool to delete a comment from a request. Use when you need to remove a specific comment from a request. On success, this returns an HTTP 204 No Content response.

- **Service**: `postman`
- **Action**: `delete_a_requests_comment`
- **Action id**: `postman.delete_a_requests_comment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "delete_a_requests_comment"
```

## Run

```bash
oo connector run "postman" --action "delete_a_requests_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Postman data. Always confirm the target and get explicit user approval before running.
