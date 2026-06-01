# Bugsnag · `list_organization_projects`

List the projects that belong to a Bugsnag organization.

- **Service**: `bugsnag`
- **Action**: `list_organization_projects`
- **Action id**: `bugsnag.list_organization_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bugsnag" --action "list_organization_projects"
```

## Run

```bash
oo connector run "bugsnag" --action "list_organization_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
