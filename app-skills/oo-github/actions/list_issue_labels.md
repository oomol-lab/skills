# GitHub · `list_issue_labels`

List labels applied to a GitHub issue.

- **Service**: `github`
- **Action**: `list_issue_labels`
- **Action id**: `github.list_issue_labels`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_issue_labels"
```

## Run

```bash
oo connector run "github" --action "list_issue_labels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
