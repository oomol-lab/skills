# Interzoid · `standardize_organization_name`

Standardize an organization name using Interzoid.

- **Service**: `interzoid`
- **Action**: `standardize_organization_name`
- **Action id**: `interzoid.standardize_organization_name`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "interzoid" --action "standardize_organization_name"
```

## Run

```bash
oo connector run "interzoid" --action "standardize_organization_name" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
