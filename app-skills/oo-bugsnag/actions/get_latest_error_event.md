# Bugsnag · `get_latest_error_event`

Get the latest event recorded on a Bugsnag error.

- **Service**: `bugsnag`
- **Action**: `get_latest_error_event`
- **Action id**: `bugsnag.get_latest_error_event`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bugsnag" --action "get_latest_error_event"
```

## Run

```bash
oo connector run "bugsnag" --action "get_latest_error_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
