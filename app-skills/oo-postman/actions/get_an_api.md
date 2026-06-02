# Postman · `get_an_api`

Tool to retrieve information about a specific API in Postman. Use when you need to fetch API details including name, description, versions, and schemas.

- **Service**: `postman`
- **Action**: `get_an_api`
- **Action id**: `postman.get_an_api`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_an_api"
```

## Run

```bash
oo connector run "postman" --action "get_an_api" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
