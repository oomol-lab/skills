# Postman · `get_a_spec_file`

Tool to get the contents of an API specification's file. Use when you need to retrieve the actual content and metadata of a specific file within a spec.

- **Service**: `postman`
- **Action**: `get_a_spec_file`
- **Action id**: `postman.get_a_spec_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_a_spec_file"
```

## Run

```bash
oo connector run "postman" --action "get_a_spec_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
