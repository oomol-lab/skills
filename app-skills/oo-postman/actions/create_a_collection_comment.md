# Postman · `create_a_collection_comment`

Tool to create a comment on an API's collection. Use when you need to add a comment to a specific collection within an API. To create a reply on an existing comment, include the thread_id in the request.

- **Service**: `postman`
- **Action**: `create_a_collection_comment`
- **Action id**: `postman.create_a_collection_comment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_a_collection_comment"
```

## Run

```bash
oo connector run "postman" --action "create_a_collection_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
