# Postman · `delete_a_collection`

Tool to permanently delete a collection from Postman. Use when you need to remove a collection that is no longer needed.

- **Service**: `postman`
- **Action**: `delete_a_collection`
- **Action id**: `postman.delete_a_collection`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "delete_a_collection"
```

## Run

```bash
oo connector run "postman" --action "delete_a_collection" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Postman data. Always confirm the target and get explicit user approval before running.
