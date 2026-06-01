# Jira · `get_project`

Get one Jira project by project ID or key.

- **Service**: `jira`
- **Action**: `get_project`
- **Action id**: `jira.get_project`
- **Required scopes**: jira.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jira" --action "get_project"
```

## Run

```bash
oo connector run "jira" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
