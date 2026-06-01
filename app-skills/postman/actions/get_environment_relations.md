# Postman · `get_environment_relations`

Tool to get environment relations for a specific API version. This endpoint is deprecated in Postman v10 and higher.

- **Service**: `postman`
- **Action**: `get_environment_relations`
- **Action id**: `postman.get_environment_relations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_environment_relations"
```

## Run

```bash
oo connector run "postman" --action "get_environment_relations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
