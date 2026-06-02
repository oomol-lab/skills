# NASA · `get_donki_notifications`

Retrieve DONKI space weather notifications with optional type filtering.

- **Service**: `nasa`
- **Action**: `get_donki_notifications`
- **Action id**: `nasa.get_donki_notifications`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasa" --action "get_donki_notifications"
```

## Run

```bash
oo connector run "nasa" --action "get_donki_notifications" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
