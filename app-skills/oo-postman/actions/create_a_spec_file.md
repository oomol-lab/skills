# Postman · `create_a_spec_file`

Tool to create a new file in an API specification. Use when you need to add a new file (such as schema definitions, path configurations, or components) to an existing spec.

- **Service**: `postman`
- **Action**: `create_a_spec_file`
- **Action id**: `postman.create_a_spec_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_a_spec_file"
```

## Run

```bash
oo connector run "postman" --action "create_a_spec_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
