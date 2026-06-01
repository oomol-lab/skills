# GitHub · `list_pull_requests`

List pull requests for a GitHub repository.

- **Service**: `github`
- **Action**: `list_pull_requests`
- **Action id**: `github.list_pull_requests`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_pull_requests"
```

## Run

```bash
oo connector run "github" --action "list_pull_requests" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
