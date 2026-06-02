# GitHub · `list_authenticated_user_received_events`

List received activity events for a GitHub user and include private events when the authenticated credential belongs to that user.

- **Service**: `github`
- **Action**: `list_authenticated_user_received_events`
- **Action id**: `github.list_authenticated_user_received_events`
- **Required scopes**: github.user.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_authenticated_user_received_events"
```

## Run

```bash
oo connector run "github" --action "list_authenticated_user_received_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
