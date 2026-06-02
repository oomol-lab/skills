# GitHub · `list_issue_timeline_events`

List timeline events for a GitHub issue.

- **Service**: `github`
- **Action**: `list_issue_timeline_events`
- **Action id**: `github.list_issue_timeline_events`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_issue_timeline_events"
```

## Run

```bash
oo connector run "github" --action "list_issue_timeline_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
