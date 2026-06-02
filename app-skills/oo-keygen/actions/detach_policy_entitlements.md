# Keygen · `detach_policy_entitlements`

Detach entitlements from a Keygen policy.

- **Service**: `keygen`
- **Action**: `detach_policy_entitlements`
- **Action id**: `keygen.detach_policy_entitlements`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "detach_policy_entitlements"
```

## Run

```bash
oo connector run "keygen" --action "detach_policy_entitlements" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
