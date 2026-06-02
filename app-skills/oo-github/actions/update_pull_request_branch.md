# GitHub · `update_pull_request_branch`

Update a GitHub pull request branch with the latest base branch changes.

- **Service**: `github`
- **Action**: `update_pull_request_branch`
- **Action id**: `github.update_pull_request_branch`
- **Required scopes**: github.pull_request.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "update_pull_request_branch"
```

## Run

```bash
oo connector run "github" --action "update_pull_request_branch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes GitHub state. Confirm the exact payload and intended effect with the user before running.
