# Postman · `create_or_update_a_schema_file`

Tool to create or update an API schema file in Postman. Use when you need to add a new schema file or modify an existing one within an API schema. Requires API ID, schema ID, file path, and stringified JSON content.

- **Service**: `postman`
- **Action**: `create_or_update_a_schema_file`
- **Action id**: `postman.create_or_update_a_schema_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_or_update_a_schema_file"
```

## Run

```bash
oo connector run "postman" --action "create_or_update_a_schema_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
