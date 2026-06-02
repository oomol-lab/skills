# Gitea · `list_issue_comments`

List comments under a Gitea issue.

- **Service**: `gitea`
- **Action**: `list_issue_comments`
- **Action id**: `gitea.list_issue_comments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gitea" --action "list_issue_comments"
```

## Run

```bash
oo connector run "gitea" --action "list_issue_comments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
