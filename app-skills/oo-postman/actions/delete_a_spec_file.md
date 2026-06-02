# Postman · `delete_a_spec_file`

Tool to delete a file from an API specification. Use when you need to remove a specific file from a multi-file specification.

- **Service**: `postman`
- **Action**: `delete_a_spec_file`
- **Action id**: `postman.delete_a_spec_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "delete_a_spec_file"
```

## Run

```bash
oo connector run "postman" --action "delete_a_spec_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Postman data. Always confirm the target and get explicit user approval before running.
