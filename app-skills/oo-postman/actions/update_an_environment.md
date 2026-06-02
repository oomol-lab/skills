# Postman · `update_an_environment`

Tool to update specific environment properties using JSON Patch operations (RFC 6902). Use when you need to modify environment name or variables without replacing the entire environment.

- **Service**: `postman`
- **Action**: `update_an_environment`
- **Action id**: `postman.update_an_environment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "update_an_environment"
```

## Run

```bash
oo connector run "postman" --action "update_an_environment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
