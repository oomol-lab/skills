# Evenium · `get_event`

Get one Evenium event by event ID or external event ID.

- **Service**: `evenium`
- **Action**: `get_event`
- **Action id**: `evenium.get_event`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "evenium" --action "get_event"
```

## Run

```bash
oo connector run "evenium" --action "get_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
