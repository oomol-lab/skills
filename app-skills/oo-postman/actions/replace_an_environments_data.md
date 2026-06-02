# Postman · `replace_an_environments_data`

Tool to completely replace an environment's data with new variables and values. Use when you need to update an entire environment by replacing all its contents. This operation replaces ALL existing variables with the ones provided in the request.

- **Service**: `postman`
- **Action**: `replace_an_environments_data`
- **Action id**: `postman.replace_an_environments_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "replace_an_environments_data"
```

## Run

```bash
oo connector run "postman" --action "replace_an_environments_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
