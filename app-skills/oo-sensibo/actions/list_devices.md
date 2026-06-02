# Sensibo · `list_devices`

List Sensibo devices linked to the authenticated user.

- **Service**: `sensibo`
- **Action**: `list_devices`
- **Action id**: `sensibo.list_devices`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sensibo" --action "list_devices"
```

## Run

```bash
oo connector run "sensibo" --action "list_devices" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
