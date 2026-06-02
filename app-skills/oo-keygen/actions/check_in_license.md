# Keygen · `check_in_license`

Check in a Keygen license for policies that require periodic license check-ins.

- **Service**: `keygen`
- **Action**: `check_in_license`
- **Action id**: `keygen.check_in_license`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "check_in_license"
```

## Run

```bash
oo connector run "keygen" --action "check_in_license" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
