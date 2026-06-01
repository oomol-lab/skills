# Sentry · `get_organization_integration_config`

List available integration provider configs for a Sentry organization, optionally filtered by provider key.

- **Service**: `sentry`
- **Action**: `get_organization_integration_config`
- **Action id**: `sentry.get_organization_integration_config`
- **Required scopes**: sentry.org.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "get_organization_integration_config"
```

## Run

```bash
oo connector run "sentry" --action "get_organization_integration_config" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
