# Sentry · `get_replay`

Get one replay instance in a Sentry organization by replay id.

- **Service**: `sentry`
- **Action**: `get_replay`
- **Action id**: `sentry.get_replay`
- **Required scopes**: sentry.org.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "get_replay"
```

## Run

```bash
oo connector run "sentry" --action "get_replay" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
