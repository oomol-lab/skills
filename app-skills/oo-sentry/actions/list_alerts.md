# Sentry · `list_alerts`

List alert workflows for a Sentry organization, with optional id, project, and search filters.

- **Service**: `sentry`
- **Action**: `list_alerts`
- **Action id**: `sentry.list_alerts`
- **Required scopes**: sentry.org.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "list_alerts"
```

## Run

```bash
oo connector run "sentry" --action "list_alerts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
