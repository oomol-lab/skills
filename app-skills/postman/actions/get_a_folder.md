# Postman · `get_a_folder`

Tool to retrieve information about a folder in a Postman collection. Use when you need to fetch details about a specific folder including its name, description, owner, and timestamps.

- **Service**: `postman`
- **Action**: `get_a_folder`
- **Action id**: `postman.get_a_folder`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_a_folder"
```

## Run

```bash
oo connector run "postman" --action "get_a_folder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
