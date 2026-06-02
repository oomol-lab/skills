# Sentry · `get_alert`

Get one alert workflow in a Sentry organization by workflow id.

- **Service**: `sentry`
- **Action**: `get_alert`
- **Action id**: `sentry.get_alert`
- **Required scopes**: sentry.org.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "get_alert"
```

## Run

```bash
oo connector run "sentry" --action "get_alert" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
