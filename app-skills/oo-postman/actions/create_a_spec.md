# Postman · `create_a_spec`

Tool to create an API specification in Postman's Spec Hub. Use when you need to create single or multi-file specifications in a workspace. Supports various spec types including OpenAPI 3.0, OpenAPI 3.1, and AsyncAPI 2.0.

- **Service**: `postman`
- **Action**: `create_a_spec`
- **Action id**: `postman.create_a_spec`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_a_spec"
```

## Run

```bash
oo connector run "postman" --action "create_a_spec" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
