# Sentry · `list_organization_issues`

List issues for a Sentry organization with optional search, project, and environment filters.

- **Service**: `sentry`
- **Action**: `list_organization_issues`
- **Action id**: `sentry.list_organization_issues`
- **Required scopes**: sentry.event.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "list_organization_issues"
```

## Run

```bash
oo connector run "sentry" --action "list_organization_issues" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
