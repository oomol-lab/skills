# Sentry · `get_sentry_app`

Get one Sentry App by id or slug, including integration metadata and OAuth client settings.

- **Service**: `sentry`
- **Action**: `get_sentry_app`
- **Action id**: `sentry.get_sentry_app`
- **Required scopes**: sentry.org.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "get_sentry_app"
```

## Run

```bash
oo connector run "sentry" --action "get_sentry_app" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
