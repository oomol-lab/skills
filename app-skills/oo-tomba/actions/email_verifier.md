# Tomba · `email_verifier`

Verify deliverability and metadata for an email address.

- **Service**: `tomba`
- **Action**: `email_verifier`
- **Action id**: `tomba.email_verifier`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tomba" --action "email_verifier"
```

## Run

```bash
oo connector run "tomba" --action "email_verifier" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
