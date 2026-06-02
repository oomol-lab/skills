# Postman · `update_a_spec_file`

Tool to update an API specification file's content. Use when you need to modify the contents of a specific file within a spec.

- **Service**: `postman`
- **Action**: `update_a_spec_file`
- **Action id**: `postman.update_a_spec_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "update_a_spec_file"
```

## Run

```bash
oo connector run "postman" --action "update_a_spec_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
