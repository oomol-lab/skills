# GitHub · `remove_issue_label`

Remove one label from a GitHub issue.

- **Service**: `github`
- **Action**: `remove_issue_label`
- **Action id**: `github.remove_issue_label`
- **Required scopes**: github.issue.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "remove_issue_label"
```

## Run

```bash
oo connector run "github" --action "remove_issue_label" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites GitHub data. Always confirm the target and get explicit user approval before running.
