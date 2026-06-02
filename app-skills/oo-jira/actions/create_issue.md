# Jira · `create_issue`

Create a Jira issue and return the normalized issue detail.

- **Service**: `jira`
- **Action**: `create_issue`
- **Action id**: `jira.create_issue`
- **Required scopes**: jira.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jira" --action "create_issue"
```

## Run

```bash
oo connector run "jira" --action "create_issue" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Jira state. Confirm the exact payload and intended effect with the user before running.
