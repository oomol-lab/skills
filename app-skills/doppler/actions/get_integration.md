# Doppler · `get_integration`

Get the details of a Doppler integration.

- **Service**: `doppler`
- **Action**: `get_integration`
- **Action id**: `doppler.get_integration`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "get_integration"
```

## Run

```bash
oo connector run "doppler" --action "get_integration" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
