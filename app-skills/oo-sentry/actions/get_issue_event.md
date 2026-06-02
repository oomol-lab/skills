# Sentry · `get_issue_event`

Get one event for a Sentry issue by event id, or use latest, oldest, or recommended selectors.

- **Service**: `sentry`
- **Action**: `get_issue_event`
- **Action id**: `sentry.get_issue_event`
- **Required scopes**: sentry.event.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "get_issue_event"
```

## Run

```bash
oo connector run "sentry" --action "get_issue_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
