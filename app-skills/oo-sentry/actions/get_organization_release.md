# Sentry · `get_organization_release`

Get one release in a Sentry organization, with optional health and summary statistics included.

- **Service**: `sentry`
- **Action**: `get_organization_release`
- **Action id**: `sentry.get_organization_release`
- **Required scopes**: sentry.project.releases

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "get_organization_release"
```

## Run

```bash
oo connector run "sentry" --action "get_organization_release" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
