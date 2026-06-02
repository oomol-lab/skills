# GitHub · `list_pull_request_files`

List files changed in a GitHub pull request.

- **Service**: `github`
- **Action**: `list_pull_request_files`
- **Action id**: `github.list_pull_request_files`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_pull_request_files"
```

## Run

```bash
oo connector run "github" --action "list_pull_request_files" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
