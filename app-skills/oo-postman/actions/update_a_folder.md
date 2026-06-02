# Postman · `update_a_folder`

Tool to update a folder in a Postman collection. Use when you need to modify the name or description of an existing folder. For complete properties and information, see the Postman Collection Format documentation.

- **Service**: `postman`
- **Action**: `update_a_folder`
- **Action id**: `postman.update_a_folder`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "update_a_folder"
```

## Run

```bash
oo connector run "postman" --action "update_a_folder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
