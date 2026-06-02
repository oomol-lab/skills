# Hunter · `email_verifier`

Verify the deliverability of an email address in Hunter.

- **Service**: `hunter`
- **Action**: `email_verifier`
- **Action id**: `hunter.email_verifier`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hunter" --action "email_verifier"
```

## Run

```bash
oo connector run "hunter" --action "email_verifier" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
