# Sentry · `list_organization_replays`

List session replays for a Sentry organization, with optional project and environment filters.

- **Service**: `sentry`
- **Action**: `list_organization_replays`
- **Action id**: `sentry.list_organization_replays`
- **Required scopes**: sentry.org.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "list_organization_replays"
```

## Run

```bash
oo connector run "sentry" --action "list_organization_replays" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
