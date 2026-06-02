# Doppler · `delete_environment`

Delete an environment from a Doppler project.

- **Service**: `doppler`
- **Action**: `delete_environment`
- **Action id**: `doppler.delete_environment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "delete_environment"
```

## Run

```bash
oo connector run "doppler" --action "delete_environment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Doppler data. Always confirm the target and get explicit user approval before running.
