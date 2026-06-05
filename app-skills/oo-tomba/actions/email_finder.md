# Tomba · `email_finder`

Find the most likely professional email address for a person at a domain.

- **Service**: `tomba`
- **Action**: `email_finder`
- **Action id**: `tomba.email_finder`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tomba" --action "email_finder"
```

## Run

```bash
oo connector run "tomba" --action "email_finder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
