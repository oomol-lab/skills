# Sentry · `list_organization_releases`

List releases that belong to a Sentry organization, optionally filtered by version prefix.

- **Service**: `sentry`
- **Action**: `list_organization_releases`
- **Action id**: `sentry.list_organization_releases`
- **Required scopes**: sentry.project.releases

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "list_organization_releases"
```

## Run

```bash
oo connector run "sentry" --action "list_organization_releases" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
