# Postman · `get_a_specs_files`

Tool to retrieve all files in an API specification from Postman. Use when you need to list or view specification files for a specific spec ID. Returns file metadata including IDs, names, paths, types, and timestamps.

- **Service**: `postman`
- **Action**: `get_a_specs_files`
- **Action id**: `postman.get_a_specs_files`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_a_specs_files"
```

## Run

```bash
oo connector run "postman" --action "get_a_specs_files" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
