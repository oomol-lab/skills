# Jira · `list_issue_comments`

List comments for one Jira issue.

- **Service**: `jira`
- **Action**: `list_issue_comments`
- **Action id**: `jira.list_issue_comments`
- **Required scopes**: jira.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jira" --action "list_issue_comments"
```

## Run

```bash
oo connector run "jira" --action "list_issue_comments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
