# Postman · `get_global_variables`

Tool to get a workspace's global variables. Use when you need to retrieve global variables that are available throughout a workspace for access between collections, requests, scripts, and environments. Note that this endpoint only works with personal or team workspaces, not public workspaces.

- **Service**: `postman`
- **Action**: `get_global_variables`
- **Action id**: `postman.get_global_variables`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_global_variables"
```

## Run

```bash
oo connector run "postman" --action "get_global_variables" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
