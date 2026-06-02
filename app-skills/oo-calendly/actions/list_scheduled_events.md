# Calendly · `list_scheduled_events`

List Calendly scheduled events for exactly one user or one organization.

- **Service**: `calendly`
- **Action**: `list_scheduled_events`
- **Action id**: `calendly.list_scheduled_events`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "list_scheduled_events"
```

## Run

```bash
oo connector run "calendly" --action "list_scheduled_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
