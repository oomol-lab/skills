# GitHub · `set_issue_labels`

Replace all labels on a GitHub issue.

- **Service**: `github`
- **Action**: `set_issue_labels`
- **Action id**: `github.set_issue_labels`
- **Required scopes**: github.issue.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "set_issue_labels"
```

## Run

```bash
oo connector run "github" --action "set_issue_labels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes GitHub state. Confirm the exact payload and intended effect with the user before running.
