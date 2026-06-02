# Postman · `get_a_spec`

Tool to retrieve information about an API specification in Postman. Use when you need to fetch spec details including name, type, and timestamps.

- **Service**: `postman`
- **Action**: `get_a_spec`
- **Action id**: `postman.get_a_spec`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_a_spec"
```

## Run

```bash
oo connector run "postman" --action "get_a_spec" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
