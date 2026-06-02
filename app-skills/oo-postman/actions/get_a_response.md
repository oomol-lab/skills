# Postman · `get_a_response`

Tool to retrieve information about a saved response in a Postman collection. Use when you need to fetch details about a specific response including status, headers, body, and metadata.

- **Service**: `postman`
- **Action**: `get_a_response`
- **Action id**: `postman.get_a_response`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_a_response"
```

## Run

```bash
oo connector run "postman" --action "get_a_response" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
