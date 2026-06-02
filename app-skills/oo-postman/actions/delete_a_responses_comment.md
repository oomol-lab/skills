# Postman · `delete_a_responses_comment`

Tool to delete a comment from a response. Use when you need to remove a specific comment from a collection response. On successful deletion, this returns HTTP 204 No Content.

- **Service**: `postman`
- **Action**: `delete_a_responses_comment`
- **Action id**: `postman.delete_a_responses_comment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "delete_a_responses_comment"
```

## Run

```bash
oo connector run "postman" --action "delete_a_responses_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Postman data. Always confirm the target and get explicit user approval before running.
