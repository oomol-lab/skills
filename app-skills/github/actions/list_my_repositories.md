# GitHub · `list_my_repositories`

List repositories visible to the authenticated GitHub user.

- **Service**: `github`
- **Action**: `list_my_repositories`
- **Action id**: `github.list_my_repositories`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_my_repositories"
```

## Run

```bash
oo connector run "github" --action "list_my_repositories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
