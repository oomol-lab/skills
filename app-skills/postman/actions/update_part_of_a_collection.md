# Postman · `update_part_of_a_collection`

Tool to update specific collection properties like name, description, authentication, variables, or events. Use when you need to partially update a collection without replacing the entire collection structure. Returns the updated collection information after the changes are applied.

- **Service**: `postman`
- **Action**: `update_part_of_a_collection`
- **Action id**: `postman.update_part_of_a_collection`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "update_part_of_a_collection"
```

## Run

```bash
oo connector run "postman" --action "update_part_of_a_collection" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
