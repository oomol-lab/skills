# Humanitix · `list_events`

List Humanitix events accessible to the connected account, with optional pagination and update filters.

- **Service**: `humanitix`
- **Action**: `list_events`
- **Action id**: `humanitix.list_events`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "humanitix" --action "list_events"
```

## Run

```bash
oo connector run "humanitix" --action "list_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
