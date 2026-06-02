# Doppler · `clone_config`

Clone a Doppler branch config and its secrets.

- **Service**: `doppler`
- **Action**: `clone_config`
- **Action id**: `doppler.clone_config`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "clone_config"
```

## Run

```bash
oo connector run "doppler" --action "clone_config" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
