# Postman · `get_schema_file_contents`

Tool to get the contents of an API schema file at a specified path. Use when you need to retrieve the actual content of a schema file. Optionally specify a version ID to get file contents from a specific API version.

- **Service**: `postman`
- **Action**: `get_schema_file_contents`
- **Action id**: `postman.get_schema_file_contents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_schema_file_contents"
```

## Run

```bash
oo connector run "postman" --action "get_schema_file_contents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
