# Postman · `get_a_schema`

Tool to retrieve information about an API schema from Postman. Use when you need to fetch schema details for a specific API. Optionally specify a version ID to get a schema published in a specific API version.

- **Service**: `postman`
- **Action**: `get_a_schema`
- **Action id**: `postman.get_a_schema`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_a_schema"
```

## Run

```bash
oo connector run "postman" --action "get_a_schema" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
