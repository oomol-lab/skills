# GitHub · `list_pull_requests_associated_with_commit`

List pull requests associated with a commit SHA.

- **Service**: `github`
- **Action**: `list_pull_requests_associated_with_commit`
- **Action id**: `github.list_pull_requests_associated_with_commit`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_pull_requests_associated_with_commit"
```

## Run

```bash
oo connector run "github" --action "list_pull_requests_associated_with_commit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
