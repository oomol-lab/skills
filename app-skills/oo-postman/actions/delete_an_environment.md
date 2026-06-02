# Postman · `delete_an_environment`

Tool to delete an environment permanently in Postman. Use when you need to remove an environment that is no longer needed.

- **Service**: `postman`
- **Action**: `delete_an_environment`
- **Action id**: `postman.delete_an_environment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "delete_an_environment"
```

## Run

```bash
oo connector run "postman" --action "delete_an_environment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Postman data. Always confirm the target and get explicit user approval before running.
