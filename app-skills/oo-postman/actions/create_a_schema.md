# Postman · `create_a_schema`

Tool to create a schema for an API in Postman. Use when you need to add a schema definition (such as OpenAPI, GraphQL, or Protocol Buffers) to an existing API. The schema can consist of single or multiple files. Returns the created schema's ID and metadata upon successful creation.

- **Service**: `postman`
- **Action**: `create_a_schema`
- **Action id**: `postman.create_a_schema`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_a_schema"
```

## Run

```bash
oo connector run "postman" --action "create_a_schema" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
