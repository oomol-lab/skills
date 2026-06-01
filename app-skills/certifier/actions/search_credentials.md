# Certifier · `search_credentials`

Search Certifier credentials with structured filter, sorting, and cursor pagination.

- **Service**: `certifier`
- **Action**: `search_credentials`
- **Action id**: `certifier.search_credentials`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "certifier" --action "search_credentials"
```

## Run

```bash
oo connector run "certifier" --action "search_credentials" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
