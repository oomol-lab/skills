# Gitea · `list_repository_issues`

List issues in a Gitea repository. Pull requests are filtered out.

- **Service**: `gitea`
- **Action**: `list_repository_issues`
- **Action id**: `gitea.list_repository_issues`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gitea" --action "list_repository_issues"
```

## Run

```bash
oo connector run "gitea" --action "list_repository_issues" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
