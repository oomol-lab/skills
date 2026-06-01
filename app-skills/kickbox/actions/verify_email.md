# Kickbox · `verify_email`

Verify whether a single email address is deliverable and retrieve Kickbox risk signals.

- **Service**: `kickbox`
- **Action**: `verify_email`
- **Action id**: `kickbox.verify_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "kickbox" --action "verify_email"
```

## Run

```bash
oo connector run "kickbox" --action "verify_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
