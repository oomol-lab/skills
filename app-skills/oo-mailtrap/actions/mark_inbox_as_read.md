# Mailtrap · `mark_inbox_as_read`

Mark all messages in one Mailtrap inbox as read.

- **Service**: `mailtrap`
- **Action**: `mark_inbox_as_read`
- **Action id**: `mailtrap.mark_inbox_as_read`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "mark_inbox_as_read"
```

## Run

```bash
oo connector run "mailtrap" --action "mark_inbox_as_read" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mailtrap state. Confirm the exact payload and intended effect with the user before running.
