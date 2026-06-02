# Calendly · `list_event_types`

List Calendly event types for exactly one user or one organization, including scheduling URLs.

- **Service**: `calendly`
- **Action**: `list_event_types`
- **Action id**: `calendly.list_event_types`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "list_event_types"
```

## Run

```bash
oo connector run "calendly" --action "list_event_types" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
