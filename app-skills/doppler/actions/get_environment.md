# Doppler · `get_environment`

Get the details of a single Doppler environment.

- **Service**: `doppler`
- **Action**: `get_environment`
- **Action id**: `doppler.get_environment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "get_environment"
```

## Run

```bash
oo connector run "doppler" --action "get_environment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
