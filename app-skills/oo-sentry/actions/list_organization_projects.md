# Sentry · `list_organization_projects`

List projects that belong to a Sentry organization.

- **Service**: `sentry`
- **Action**: `list_organization_projects`
- **Action id**: `sentry.list_organization_projects`
- **Required scopes**: sentry.org.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "list_organization_projects"
```

## Run

```bash
oo connector run "sentry" --action "list_organization_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
