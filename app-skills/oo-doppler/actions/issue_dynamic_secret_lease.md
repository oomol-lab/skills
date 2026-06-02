# Doppler · `issue_dynamic_secret_lease`

Issue a short-lived lease for a Doppler dynamic secret.

- **Service**: `doppler`
- **Action**: `issue_dynamic_secret_lease`
- **Action id**: `doppler.issue_dynamic_secret_lease`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "issue_dynamic_secret_lease"
```

## Run

```bash
oo connector run "doppler" --action "issue_dynamic_secret_lease" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
