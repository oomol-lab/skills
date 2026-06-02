# Doppler · `revoke_dynamic_secret_lease`

Revoke a lease issued for a Doppler dynamic secret.

- **Service**: `doppler`
- **Action**: `revoke_dynamic_secret_lease`
- **Action id**: `doppler.revoke_dynamic_secret_lease`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "revoke_dynamic_secret_lease"
```

## Run

```bash
oo connector run "doppler" --action "revoke_dynamic_secret_lease" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Doppler data. Always confirm the target and get explicit user approval before running.
