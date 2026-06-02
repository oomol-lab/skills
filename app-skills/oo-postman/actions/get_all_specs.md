# Postman · `get_all_specs`

Tool to get all API specifications in a workspace. Use when you need to list or retrieve API specs from a specific Postman workspace. Returns an array of spec objects with their IDs, names, types, and timestamps, along with pagination metadata.

- **Service**: `postman`
- **Action**: `get_all_specs`
- **Action id**: `postman.get_all_specs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_all_specs"
```

## Run

```bash
oo connector run "postman" --action "get_all_specs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
