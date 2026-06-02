# Bugsnag · `list_error_events`

List the events recorded on a Bugsnag error.

- **Service**: `bugsnag`
- **Action**: `list_error_events`
- **Action id**: `bugsnag.list_error_events`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bugsnag" --action "list_error_events"
```

## Run

```bash
oo connector run "bugsnag" --action "list_error_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
