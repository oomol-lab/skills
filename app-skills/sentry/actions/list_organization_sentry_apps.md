# Sentry · `list_organization_sentry_apps`

List the custom Sentry Apps created by a Sentry organization.

- **Service**: `sentry`
- **Action**: `list_organization_sentry_apps`
- **Action id**: `sentry.list_organization_sentry_apps`
- **Required scopes**: sentry.org.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "list_organization_sentry_apps"
```

## Run

```bash
oo connector run "sentry" --action "list_organization_sentry_apps" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
