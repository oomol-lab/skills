# Sentry · `update_issue`

Update mutable attributes on one Sentry issue, such as status, assignment, or bookmarks.

- **Service**: `sentry`
- **Action**: `update_issue`
- **Action id**: `sentry.update_issue`
- **Required scopes**: sentry.event.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sentry" --action "update_issue"
```

## Run

```bash
oo connector run "sentry" --action "update_issue" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Sentry state. Confirm the exact payload and intended effect with the user before running.
