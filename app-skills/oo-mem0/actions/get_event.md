# Mem0 · `get_event`

Get a single Mem0 event by event ID.

- **Service**: `mem0`
- **Action**: `get_event`
- **Action id**: `mem0.get_event`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mem0" --action "get_event"
```

## Run

```bash
oo connector run "mem0" --action "get_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
