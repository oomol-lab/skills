# Keygen · `renew_license`

Renew a Keygen license according to its policy.

- **Service**: `keygen`
- **Action**: `renew_license`
- **Action id**: `keygen.renew_license`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "renew_license"
```

## Run

```bash
oo connector run "keygen" --action "renew_license" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
