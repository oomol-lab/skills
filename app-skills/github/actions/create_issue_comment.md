# GitHub · `create_issue_comment`

Create a comment on a GitHub issue.

- **Service**: `github`
- **Action**: `create_issue_comment`
- **Action id**: `github.create_issue_comment`
- **Required scopes**: github.issue.comment.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "create_issue_comment"
```

## Run

```bash
oo connector run "github" --action "create_issue_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes GitHub state. Confirm the exact payload and intended effect with the user before running.
