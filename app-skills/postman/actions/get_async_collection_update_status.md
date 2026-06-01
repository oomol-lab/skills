# Postman · `get_async_collection_update_status`

Tool to get the status of an asynchronous collection update task. Use when you need to check whether a previously initiated async collection update is still processing, has completed successfully, or has failed. The task ID is obtained from PUT /collections/{collectionId} endpoint when using the Prefer: respond-async header.

- **Service**: `postman`
- **Action**: `get_async_collection_update_status`
- **Action id**: `postman.get_async_collection_update_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_async_collection_update_status"
```

## Run

```bash
oo connector run "postman" --action "get_async_collection_update_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
