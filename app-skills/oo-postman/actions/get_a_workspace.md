# Postman · `get_a_workspace`

Tool to get detailed information about a specific workspace by its ID. Use when you need to retrieve the complete structure of a workspace including all collections, environments, APIs, mocks, and monitors.

- **Service**: `postman`
- **Action**: `get_a_workspace`
- **Action id**: `postman.get_a_workspace`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_a_workspace"
```

## Run

```bash
oo connector run "postman" --action "get_a_workspace" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
