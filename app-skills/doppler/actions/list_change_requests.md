# Doppler · `list_change_requests`

List Doppler workplace change requests.

- **Service**: `doppler`
- **Action**: `list_change_requests`
- **Action id**: `doppler.list_change_requests`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "list_change_requests"
```

## Run

```bash
oo connector run "doppler" --action "list_change_requests" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
