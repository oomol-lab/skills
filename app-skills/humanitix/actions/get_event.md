# Humanitix · `get_event`

Retrieve full Humanitix metadata for a single event by event ID.

- **Service**: `humanitix`
- **Action**: `get_event`
- **Action id**: `humanitix.get_event`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "humanitix" --action "get_event"
```

## Run

```bash
oo connector run "humanitix" --action "get_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
