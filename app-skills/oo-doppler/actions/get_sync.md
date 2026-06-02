# Doppler · `get_sync`

Get the details of a Doppler secrets sync.

- **Service**: `doppler`
- **Action**: `get_sync`
- **Action id**: `doppler.get_sync`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "get_sync"
```

## Run

```bash
oo connector run "doppler" --action "get_sync" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Doppler state. Confirm the exact payload and intended effect with the user before running.
