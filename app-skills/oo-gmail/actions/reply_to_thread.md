# Gmail · `reply_to_thread`

Reply to an existing Gmail thread while preserving Gmail threading. Use this when you want the reply to stay in the same conversation and optionally override recipients.

- **Service**: `gmail`
- **Action**: `reply_to_thread`
- **Action id**: `gmail.reply_to_thread`
- **Required scopes**: gmail.compose

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "reply_to_thread"
```

## Run

```bash
oo connector run "gmail" --action "reply_to_thread" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gmail state. Confirm the exact payload and intended effect with the user before running.
