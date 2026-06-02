# Gitea · `create_issue_comment`

Create a comment on a Gitea issue.

- **Service**: `gitea`
- **Action**: `create_issue_comment`
- **Action id**: `gitea.create_issue_comment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gitea" --action "create_issue_comment"
```

## Run

```bash
oo connector run "gitea" --action "create_issue_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gitea state. Confirm the exact payload and intended effect with the user before running.
