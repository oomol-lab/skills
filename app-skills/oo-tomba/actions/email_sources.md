# Tomba · `email_sources`

Retrieve public source URLs where Tomba found an email address.

- **Service**: `tomba`
- **Action**: `email_sources`
- **Action id**: `tomba.email_sources`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tomba" --action "email_sources"
```

## Run

```bash
oo connector run "tomba" --action "email_sources" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
