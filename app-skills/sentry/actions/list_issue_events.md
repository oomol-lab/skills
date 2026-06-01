# Sentry · `list_issue_events`

List events that belong to one Sentry issue, with optional event query filters.

- **Service**: `sentry`
- **Action**: `list_issue_events`
- **Action id**: `sentry.list_issue_events`
- **Required scopes**: sentry.event.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "list_issue_events"
```

## Run

```bash
oo connector run "sentry" --action "list_issue_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
