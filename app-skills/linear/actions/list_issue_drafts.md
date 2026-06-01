# Linear · `list_issue_drafts`

Lists issue drafts visible to the current user in Linear.

- **Service**: `linear`
- **Action**: `list_issue_drafts`
- **Action id**: `linear.list_issue_drafts`
- **Required scopes**: linear.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "list_issue_drafts"
```

## Run

```bash
oo connector run "linear" --action "list_issue_drafts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
