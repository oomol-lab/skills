# GitHub · `list_pull_request_requested_reviewers`

List requested reviewers on a GitHub pull request.

- **Service**: `github`
- **Action**: `list_pull_request_requested_reviewers`
- **Action id**: `github.list_pull_request_requested_reviewers`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_pull_request_requested_reviewers"
```

## Run

```bash
oo connector run "github" --action "list_pull_request_requested_reviewers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
