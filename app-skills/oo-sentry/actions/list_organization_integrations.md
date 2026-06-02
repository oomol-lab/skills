# Sentry · `list_organization_integrations`

List installed integrations for a Sentry organization, with optional provider and feature filters.

- **Service**: `sentry`
- **Action**: `list_organization_integrations`
- **Action id**: `sentry.list_organization_integrations`
- **Required scopes**: sentry.org.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "list_organization_integrations"
```

## Run

```bash
oo connector run "sentry" --action "list_organization_integrations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
