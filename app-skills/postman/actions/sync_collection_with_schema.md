# Postman · `sync_collection_with_schema`

Tool to sync a collection attached to an API with the API schema. This is an asynchronous endpoint that returns HTTP 202 Accepted. Use when you need to synchronize a collection with changes made to the API schema. The collection must already be attached to the API. Returns a task ID that can be used to check the status of the sync operation.

- **Service**: `postman`
- **Action**: `sync_collection_with_schema`
- **Action id**: `postman.sync_collection_with_schema`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "sync_collection_with_schema"
```

## Run

```bash
oo connector run "postman" --action "sync_collection_with_schema" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
