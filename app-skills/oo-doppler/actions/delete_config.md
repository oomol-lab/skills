# Doppler · `delete_config`

Delete a Doppler config.

- **Service**: `doppler`
- **Action**: `delete_config`
- **Action id**: `doppler.delete_config`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "delete_config"
```

## Run

```bash
oo connector run "doppler" --action "delete_config" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Doppler data. Always confirm the target and get explicit user approval before running.
