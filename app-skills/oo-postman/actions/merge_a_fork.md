# Postman · `merge_a_fork`

Tool to merge a forked collection back into its parent collection. This endpoint is deprecated. Use when you need to merge changes from a forked collection into the parent collection.

- **Service**: `postman`
- **Action**: `merge_a_fork`
- **Action id**: `postman.merge_a_fork`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "merge_a_fork"
```

## Run

```bash
oo connector run "postman" --action "merge_a_fork" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
