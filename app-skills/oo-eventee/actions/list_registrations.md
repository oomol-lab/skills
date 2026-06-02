# Eventee · `list_registrations`

List all pending or completed registrations for the current Eventee event.

- **Service**: `eventee`
- **Action**: `list_registrations`
- **Action id**: `eventee.list_registrations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eventee" --action "list_registrations"
```

## Run

```bash
oo connector run "eventee" --action "list_registrations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
