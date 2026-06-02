# GitHub · `list_repository_issues`

List issues for a GitHub repository. Pull requests are filtered out from the response.

- **Service**: `github`
- **Action**: `list_repository_issues`
- **Action id**: `github.list_repository_issues`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_repository_issues"
```

## Run

```bash
oo connector run "github" --action "list_repository_issues" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
