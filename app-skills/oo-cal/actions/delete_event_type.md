# Cal.com · `delete_event_type`

Delete a Cal.com event type by numeric ID.

- **Service**: `cal`
- **Action**: `delete_event_type`
- **Action id**: `cal.delete_event_type`
- **Required scopes**: cal.event_types.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "delete_event_type"
```

## Run

```bash
oo connector run "cal" --action "delete_event_type" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Cal.com data. Always confirm the target and get explicit user approval before running.
