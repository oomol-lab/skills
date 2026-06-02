# Doppler · `delete_service_token`

Delete a service token for a specific project and config.

- **Service**: `doppler`
- **Action**: `delete_service_token`
- **Action id**: `doppler.delete_service_token`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "delete_service_token"
```

## Run

```bash
oo connector run "doppler" --action "delete_service_token" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Doppler data. Always confirm the target and get explicit user approval before running.
