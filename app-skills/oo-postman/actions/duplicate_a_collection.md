# Postman · `duplicate_a_collection`

Tool to create a duplicate of a collection in another workspace. Use when you need to copy an existing collection to a different workspace. Returns an asynchronous task that can be tracked using the duplication task status endpoint.

- **Service**: `postman`
- **Action**: `duplicate_a_collection`
- **Action id**: `postman.duplicate_a_collection`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "duplicate_a_collection"
```

## Run

```bash
oo connector run "postman" --action "duplicate_a_collection" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
