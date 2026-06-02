# Keygen · `revoke_license`

Revoke a Keygen license through the official revoke action.

- **Service**: `keygen`
- **Action**: `revoke_license`
- **Action id**: `keygen.revoke_license`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "revoke_license"
```

## Run

```bash
oo connector run "keygen" --action "revoke_license" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Keygen data. Always confirm the target and get explicit user approval before running.
