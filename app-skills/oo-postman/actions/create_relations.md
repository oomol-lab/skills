# Postman · `create_relations`

Tool to create new relations for an API version. Use when you need to link collections or mock servers to an API version as contract tests, test suites, documentation, or mocks.

- **Service**: `postman`
- **Action**: `create_relations`
- **Action id**: `postman.create_relations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "create_relations"
```

## Run

```bash
oo connector run "postman" --action "create_relations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
