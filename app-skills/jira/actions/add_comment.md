# Jira · `add_comment`

Add a comment to one Jira issue.

- **Service**: `jira`
- **Action**: `add_comment`
- **Action id**: `jira.add_comment`
- **Required scopes**: jira.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jira" --action "add_comment"
```

## Run

```bash
oo connector run "jira" --action "add_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Jira state. Confirm the exact payload and intended effect with the user before running.
