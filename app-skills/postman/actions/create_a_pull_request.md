# Postman · `create_a_pull_request`

Tool to create a pull request for a forked collection into its parent collection. Use when you need to propose changes from a forked collection to be merged into the parent collection. The forked collection must exist before creating a pull request.

- **Service**: `postman`
- **Action**: `create_a_pull_request`
- **Action id**: `postman.create_a_pull_request`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_a_pull_request"
```

## Run

```bash
oo connector run "postman" --action "create_a_pull_request" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
