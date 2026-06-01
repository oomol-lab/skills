# Postman · `delete_a_spec`

Tool to delete an API specification from Postman. Use when you need to permanently remove a specification. On success, returns HTTP 204 No Content response.

- **Service**: `postman`
- **Action**: `delete_a_spec`
- **Action id**: `postman.delete_a_spec`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "delete_a_spec"
```

## Run

```bash
oo connector run "postman" --action "delete_a_spec" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Postman data. Always confirm the target and get explicit user approval before running.
