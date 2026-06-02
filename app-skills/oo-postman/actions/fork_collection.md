# Postman · `fork_collection`

Tool to create a fork of a collection in a specified workspace. Use when you need to fork an existing collection to a workspace.

- **Service**: `postman`
- **Action**: `fork_collection`
- **Action id**: `postman.fork_collection`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "fork_collection"
```

## Run

```bash
oo connector run "postman" --action "fork_collection" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
