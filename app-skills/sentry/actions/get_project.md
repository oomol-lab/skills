# Sentry · `get_project`

Get one Sentry project by organization and project slug or id.

- **Service**: `sentry`
- **Action**: `get_project`
- **Action id**: `sentry.get_project`
- **Required scopes**: sentry.project.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "get_project"
```

## Run

```bash
oo connector run "sentry" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
