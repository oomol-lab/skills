# Keygen · `suspend_license`

Suspend a Keygen license so it can no longer authenticate with the API.

- **Service**: `keygen`
- **Action**: `suspend_license`
- **Action id**: `keygen.suspend_license`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "suspend_license"
```

## Run

```bash
oo connector run "keygen" --action "suspend_license" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
