# Eventee · `get_event_content`

Retrieve the event content export, including halls, sessions, pauses, speakers, and tracks.

- **Service**: `eventee`
- **Action**: `get_event_content`
- **Action id**: `eventee.get_event_content`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eventee" --action "get_event_content"
```

## Run

```bash
oo connector run "eventee" --action "get_event_content" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
