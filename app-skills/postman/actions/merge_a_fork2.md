# Postman · `merge_a_fork2`

Tool to merge a forked environment back into its parent environment. Use when you need to merge changes from a forked environment into the parent.

- **Service**: `postman`
- **Action**: `merge_a_fork2`
- **Action id**: `postman.merge_a_fork2`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "merge_a_fork2"
```

## Run

```bash
oo connector run "postman" --action "merge_a_fork2" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
