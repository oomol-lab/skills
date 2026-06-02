# Svix · `list_event_types`

List event types available to the current Svix account.

- **Service**: `svix`
- **Action**: `list_event_types`
- **Action id**: `svix.list_event_types`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "svix" --action "list_event_types"
```

## Run

```bash
oo connector run "svix" --action "list_event_types" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
