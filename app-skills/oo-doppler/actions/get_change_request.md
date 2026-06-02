# Doppler · `get_change_request`

Get the details of a Doppler change request.

- **Service**: `doppler`
- **Action**: `get_change_request`
- **Action id**: `doppler.get_change_request`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "get_change_request"
```

## Run

```bash
oo connector run "doppler" --action "get_change_request" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
