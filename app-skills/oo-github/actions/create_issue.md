# GitHub · `create_issue`

Create an issue in a GitHub repository.

- **Service**: `github`
- **Action**: `create_issue`
- **Action id**: `github.create_issue`
- **Required scopes**: github.issue.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "create_issue"
```

## Run

```bash
oo connector run "github" --action "create_issue" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes GitHub state. Confirm the exact payload and intended effect with the user before running.
