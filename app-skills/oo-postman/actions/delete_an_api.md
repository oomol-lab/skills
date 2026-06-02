# Postman · `delete_an_api`

Tool to delete an API from Postman. Use when you need to permanently remove an API. On success, returns HTTP 204 No Content response.

- **Service**: `postman`
- **Action**: `delete_an_api`
- **Action id**: `postman.delete_an_api`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "delete_an_api"
```

## Run

```bash
oo connector run "postman" --action "delete_an_api" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Postman data. Always confirm the target and get explicit user approval before running.
