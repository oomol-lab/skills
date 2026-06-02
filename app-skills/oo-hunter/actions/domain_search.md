# Hunter · `domain_search`

Search public email addresses for a company domain in Hunter.

- **Service**: `hunter`
- **Action**: `domain_search`
- **Action id**: `hunter.domain_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hunter" --action "domain_search"
```

## Run

```bash
oo connector run "hunter" --action "domain_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
