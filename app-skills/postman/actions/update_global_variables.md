# Postman · `update_global_variables`

Tool to update and replace a workspace's global variables. Use when you need to set or replace all global variables in a workspace. Note: This endpoint replaces all existing global variables with the provided list.

- **Service**: `postman`
- **Action**: `update_global_variables`
- **Action id**: `postman.update_global_variables`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "update_global_variables"
```

## Run

```bash
oo connector run "postman" --action "update_global_variables" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
