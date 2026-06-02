# Simple Analytics · `send_event`

Send a server-side event or pageview to Simple Analytics.

- **Service**: `simple_analytics`
- **Action**: `send_event`
- **Action id**: `simple_analytics.send_event`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "simple_analytics" --action "send_event"
```

## Run

```bash
oo connector run "simple_analytics" --action "send_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Simple Analytics state. Confirm the exact payload and intended effect with the user before running.
