# Postman · `delete_a_response`

Tool to delete a response in a Postman collection. Use when you need to remove a saved response from a collection.

- **Service**: `postman`
- **Action**: `delete_a_response`
- **Action id**: `postman.delete_a_response`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "delete_a_response"
```

## Run

```bash
oo connector run "postman" --action "delete_a_response" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Postman data. Always confirm the target and get explicit user approval before running.
