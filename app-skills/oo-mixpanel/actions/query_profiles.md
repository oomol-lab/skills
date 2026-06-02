# Mixpanel · `query_profiles`

Query Mixpanel profiles with optional filters, paging, and selected properties.

- **Service**: `mixpanel`
- **Action**: `query_profiles`
- **Action id**: `mixpanel.query_profiles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mixpanel" --action "query_profiles"
```

## Run

```bash
oo connector run "mixpanel" --action "query_profiles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
