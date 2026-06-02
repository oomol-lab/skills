# Doppler · `get_auth_me`

Get identity, principal, and workplace summary information for the current Doppler token.

- **Service**: `doppler`
- **Action**: `get_auth_me`
- **Action id**: `doppler.get_auth_me`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "get_auth_me"
```

## Run

```bash
oo connector run "doppler" --action "get_auth_me" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
