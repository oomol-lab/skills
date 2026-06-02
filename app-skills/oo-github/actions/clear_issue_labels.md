# GitHub · `clear_issue_labels`

Remove all labels from a GitHub issue.

- **Service**: `github`
- **Action**: `clear_issue_labels`
- **Action id**: `github.clear_issue_labels`
- **Required scopes**: github.issue.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "clear_issue_labels"
```

## Run

```bash
oo connector run "github" --action "clear_issue_labels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites GitHub data. Always confirm the target and get explicit user approval before running.
