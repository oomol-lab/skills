# Gitea · `list_my_repositories`

List repositories owned by the authenticated Gitea user.

- **Service**: `gitea`
- **Action**: `list_my_repositories`
- **Action id**: `gitea.list_my_repositories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gitea" --action "list_my_repositories"
```

## Run

```bash
oo connector run "gitea" --action "list_my_repositories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
