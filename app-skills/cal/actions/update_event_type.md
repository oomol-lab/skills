# Cal.com · `update_event_type`

Update a Cal.com event type by numeric ID.

- **Service**: `cal`
- **Action**: `update_event_type`
- **Action id**: `cal.update_event_type`
- **Required scopes**: cal.event_types.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "update_event_type"
```

## Run

```bash
oo connector run "cal" --action "update_event_type" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cal.com state. Confirm the exact payload and intended effect with the user before running.
