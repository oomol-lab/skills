# Postman · `get_a_request`

Tool to retrieve information about a specific request in a Postman collection. Use when you need to fetch details about a request including its method, URL, headers, body, authentication, and associated scripts.

- **Service**: `postman`
- **Action**: `get_a_request`
- **Action id**: `postman.get_a_request`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_a_request"
```

## Run

```bash
oo connector run "postman" --action "get_a_request" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
