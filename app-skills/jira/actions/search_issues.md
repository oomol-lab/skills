# Jira · `search_issues`

Search Jira issues with JQL on the connected Jira site.

- **Service**: `jira`
- **Action**: `search_issues`
- **Action id**: `jira.search_issues`
- **Required scopes**: jira.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jira" --action "search_issues"
```

## Run

```bash
oo connector run "jira" --action "search_issues" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
