# Postman · `sync_spec_with_collection`

Tool to sync an API specification with a linked collection. This is an asynchronous operation that returns HTTP 202 Accepted with task tracking information. Use when you need to synchronize changes from a generated collection back to its source specification. Prerequisites: the collection must be generated from the spec, and the spec must be single-file.

- **Service**: `postman`
- **Action**: `sync_spec_with_collection`
- **Action id**: `postman.sync_spec_with_collection`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "sync_spec_with_collection"
```

## Run

```bash
oo connector run "postman" --action "sync_spec_with_collection" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
