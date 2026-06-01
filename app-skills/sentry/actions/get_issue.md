# Sentry · `get_issue`

Get one issue in a Sentry organization by numeric id or short id.

- **Service**: `sentry`
- **Action**: `get_issue`
- **Action id**: `sentry.get_issue`
- **Required scopes**: sentry.event.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "get_issue"
```

## Run

```bash
oo connector run "sentry" --action "get_issue" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
