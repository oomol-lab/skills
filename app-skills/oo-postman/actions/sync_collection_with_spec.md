# Postman · `sync_collection_with_spec`

Tool to sync a collection generated from an API specification. This is an asynchronous operation that returns HTTP 202 Accepted. Use when you need to update a collection to match the latest version of its source API specification. The collection must have been generated from a spec.

- **Service**: `postman`
- **Action**: `sync_collection_with_spec`
- **Action id**: `postman.sync_collection_with_spec`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "sync_collection_with_spec"
```

## Run

```bash
oo connector run "postman" --action "sync_collection_with_spec" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
