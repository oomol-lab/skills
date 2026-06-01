# Doppler · `get_config`

Get the details of a single Doppler config.

- **Service**: `doppler`
- **Action**: `get_config`
- **Action id**: `doppler.get_config`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "get_config"
```

## Run

```bash
oo connector run "doppler" --action "get_config" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
