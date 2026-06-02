# GitHub · `unlock_issue`

Unlock a GitHub issue conversation.

- **Service**: `github`
- **Action**: `unlock_issue`
- **Action id**: `github.unlock_issue`
- **Required scopes**: github.issue.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "unlock_issue"
```

## Run

```bash
oo connector run "github" --action "unlock_issue" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
