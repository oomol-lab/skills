# Sentry · `get_release_health_stats`

Retrieve release health session statistics for one Sentry release by querying the sessions endpoint with that release version.

- **Service**: `sentry`
- **Action**: `get_release_health_stats`
- **Action id**: `sentry.get_release_health_stats`
- **Required scopes**: sentry.org.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "get_release_health_stats"
```

## Run

```bash
oo connector run "sentry" --action "get_release_health_stats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
