# GitHub · `create_pull_request`

Create a pull request in a GitHub repository.

- **Service**: `github`
- **Action**: `create_pull_request`
- **Action id**: `github.create_pull_request`
- **Required scopes**: github.pull_request.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "create_pull_request"
```

## Run

```bash
oo connector run "github" --action "create_pull_request" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes GitHub state. Confirm the exact payload and intended effect with the user before running.
