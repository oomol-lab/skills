# Postman · `create_a_collection`

Tool to create a new Postman collection in a specific workspace or the default workspace. Use when you need to create a collection with workspace specification. For complete collection format details, refer to the Postman Collection Format documentation.

- **Service**: `postman`
- **Action**: `create_a_collection`
- **Action id**: `postman.create_a_collection`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_a_collection"
```

## Run

```bash
oo connector run "postman" --action "create_a_collection" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
