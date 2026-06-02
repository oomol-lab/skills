# Mem0 · `get_events`

List Mem0 events for the current API key.

- **Service**: `mem0`
- **Action**: `get_events`
- **Action id**: `mem0.get_events`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mem0" --action "get_events"
```

## Run

```bash
oo connector run "mem0" --action "get_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
