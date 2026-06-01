# Postman · `get_an_environments_forks`

Tool to retrieve all forked environments for a specific environment. Use when you need to list all environments that have been forked from a particular environment.

- **Service**: `postman`
- **Action**: `get_an_environments_forks`
- **Action id**: `postman.get_an_environments_forks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_an_environments_forks"
```

## Run

```bash
oo connector run "postman" --action "get_an_environments_forks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
