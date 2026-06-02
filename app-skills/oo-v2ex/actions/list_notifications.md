# V2EX · `list_notifications`

Fetch the latest V2EX notifications for the authenticated member.

- **Service**: `v2ex`
- **Action**: `list_notifications`
- **Action id**: `v2ex.list_notifications`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v2ex" --action "list_notifications"
```

## Run

```bash
oo connector run "v2ex" --action "list_notifications" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
