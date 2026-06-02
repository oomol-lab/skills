# Postman · `get_an_environment`

Tool to retrieve detailed information about a specific environment in Postman. Use when you need to fetch environment details including name, ID, owner, and all environment variables.

- **Service**: `postman`
- **Action**: `get_an_environment`
- **Action id**: `postman.get_an_environment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_an_environment"
```

## Run

```bash
oo connector run "postman" --action "get_an_environment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
