# waboxapp · `send_media`

Send a file attachment by public URL through Waboxapp.

- **Service**: `waboxapp`
- **Action**: `send_media`
- **Action id**: `waboxapp.send_media`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "waboxapp" --action "send_media"
```

## Run

```bash
oo connector run "waboxapp" --action "send_media" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes waboxapp state. Confirm the exact payload and intended effect with the user before running.
