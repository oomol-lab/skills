# Keygen · `reinstate_license`

Reinstate a suspended Keygen license.

- **Service**: `keygen`
- **Action**: `reinstate_license`
- **Action id**: `keygen.reinstate_license`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "reinstate_license"
```

## Run

```bash
oo connector run "keygen" --action "reinstate_license" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
