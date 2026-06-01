# Postman · `get_all_environments`

Tool to get all environments accessible to the authenticated user with optional workspace filtering. Use when you need to list or retrieve environments from Postman. Returns an array of environment objects with their IDs, names, and UIDs.

- **Service**: `postman`
- **Action**: `get_all_environments`
- **Action id**: `postman.get_all_environments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_all_environments"
```

## Run

```bash
oo connector run "postman" --action "get_all_environments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
