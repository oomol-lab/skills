# Postman · `update_a_pull_request`

Tool to update an open pull request in Postman. Use when you need to modify the title, description, source, destination, or reviewers of an existing pull request. All fields must be provided in the request.

- **Service**: `postman`
- **Action**: `update_a_pull_request`
- **Action id**: `postman.update_a_pull_request`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "update_a_pull_request"
```

## Run

```bash
oo connector run "postman" --action "update_a_pull_request" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
