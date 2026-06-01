# Postman · `create_a_collection_from_a_schema`

Tool to create a collection from a schema and link it to an API with specified relations. Note: This endpoint is deprecated in Postman v10 and higher. Use when you need to generate a collection from an API schema and establish relations like contract tests or documentation.

- **Service**: `postman`
- **Action**: `create_a_collection_from_a_schema`
- **Action id**: `postman.create_a_collection_from_a_schema`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_a_collection_from_a_schema"
```

## Run

```bash
oo connector run "postman" --action "create_a_collection_from_a_schema" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
