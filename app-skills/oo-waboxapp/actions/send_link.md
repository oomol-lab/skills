# waboxapp · `send_link`

Send a link with preview metadata through Waboxapp.

- **Service**: `waboxapp`
- **Action**: `send_link`
- **Action id**: `waboxapp.send_link`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "waboxapp" --action "send_link"
```

## Run

```bash
oo connector run "waboxapp" --action "send_link" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes waboxapp state. Confirm the exact payload and intended effect with the user before running.
