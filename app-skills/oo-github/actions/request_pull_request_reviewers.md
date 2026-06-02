# GitHub · `request_pull_request_reviewers`

Request reviewers on a GitHub pull request.

- **Service**: `github`
- **Action**: `request_pull_request_reviewers`
- **Action id**: `github.request_pull_request_reviewers`
- **Required scopes**: github.pull_request.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "request_pull_request_reviewers"
```

## Run

```bash
oo connector run "github" --action "request_pull_request_reviewers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
