# Postman · `delete_a_server_response`

Tool to delete a mock server's server response. Use when you need to remove a specific response from a Postman mock server.

- **Service**: `postman`
- **Action**: `delete_a_server_response`
- **Action id**: `postman.delete_a_server_response`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "delete_a_server_response"
```

## Run

```bash
oo connector run "postman" --action "delete_a_server_response" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Postman data. Always confirm the target and get explicit user approval before running.
