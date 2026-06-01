# Logo.dev · `describe_brand`

Fetch structured Logo.dev brand metadata for a domain.

- **Service**: `logo_dev`
- **Action**: `describe_brand`
- **Action id**: `logo_dev.describe_brand`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "logo_dev" --action "describe_brand"
```

## Run

```bash
oo connector run "logo_dev" --action "describe_brand" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
