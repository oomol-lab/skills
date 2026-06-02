# Jira · `get_issue`

Get one Jira issue by issue ID or key.

- **Service**: `jira`
- **Action**: `get_issue`
- **Action id**: `jira.get_issue`
- **Required scopes**: jira.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jira" --action "get_issue"
```

## Run

```bash
oo connector run "jira" --action "get_issue" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
