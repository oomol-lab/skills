# Sentry · `get_organization_integration`

Get one installed Sentry organization integration by its integration id.

- **Service**: `sentry`
- **Action**: `get_organization_integration`
- **Action id**: `sentry.get_organization_integration`
- **Required scopes**: sentry.org.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "get_organization_integration"
```

## Run

```bash
oo connector run "sentry" --action "get_organization_integration" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
