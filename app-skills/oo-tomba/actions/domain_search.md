# Tomba · `domain_search`

Search for email addresses and company intelligence for a domain.

- **Service**: `tomba`
- **Action**: `domain_search`
- **Action id**: `tomba.domain_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tomba" --action "domain_search"
```

## Run

```bash
oo connector run "tomba" --action "domain_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
