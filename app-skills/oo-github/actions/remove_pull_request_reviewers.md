# GitHub · `remove_pull_request_reviewers`

Remove requested reviewers from a GitHub pull request.

- **Service**: `github`
- **Action**: `remove_pull_request_reviewers`
- **Action id**: `github.remove_pull_request_reviewers`
- **Required scopes**: github.pull_request.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "remove_pull_request_reviewers"
```

## Run

```bash
oo connector run "github" --action "remove_pull_request_reviewers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites GitHub data. Always confirm the target and get explicit user approval before running.
