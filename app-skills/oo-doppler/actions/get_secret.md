# Doppler · `get_secret`

Get the value and metadata of a single secret for a specific project and config.

- **Service**: `doppler`
- **Action**: `get_secret`
- **Action id**: `doppler.get_secret`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "get_secret"
```

## Run

```bash
oo connector run "doppler" --action "get_secret" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
