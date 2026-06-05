# Tomba · `email_count`

Count known email addresses and related breakdowns for a domain.

- **Service**: `tomba`
- **Action**: `email_count`
- **Action id**: `tomba.email_count`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tomba" --action "email_count"
```

## Run

```bash
oo connector run "tomba" --action "email_count" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
