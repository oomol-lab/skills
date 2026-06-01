# Postman · `get_resource_types`

Tool to get all resource types supported by Postman's SCIM API. Use when you need to discover what resource types (e.g., User, Group) are available in the SCIM API and their corresponding endpoints and schemas.

- **Service**: `postman`
- **Action**: `get_resource_types`
- **Action id**: `postman.get_resource_types`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_resource_types"
```

## Run

```bash
oo connector run "postman" --action "get_resource_types" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
