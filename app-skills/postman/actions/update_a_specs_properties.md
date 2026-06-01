# Postman · `update_a_specs_properties`

Tool to update an API specification's properties such as its name. Use when you need to modify metadata of an existing spec.

- **Service**: `postman`
- **Action**: `update_a_specs_properties`
- **Action id**: `postman.update_a_specs_properties`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "update_a_specs_properties"
```

## Run

```bash
oo connector run "postman" --action "update_a_specs_properties" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
