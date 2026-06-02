# Postman · `get_schema_files`

Tool to retrieve files in an API schema from Postman. Use when you need to list or view schema files for a specific API and schema ID. Optionally filter by version ID to get files from a particular API version.

- **Service**: `postman`
- **Action**: `get_schema_files`
- **Action id**: `postman.get_schema_files`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_schema_files"
```

## Run

```bash
oo connector run "postman" --action "get_schema_files" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
