# Gmail · `reply_email`

Reply to an existing Gmail thread using the original message's reply headers. This compatibility action returns only the new `messageId`.

- **Service**: `gmail`
- **Action**: `reply_email`
- **Action id**: `gmail.reply_email`
- **Required scopes**: gmail.compose

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "reply_email"
```

## Run

```bash
oo connector run "gmail" --action "reply_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gmail state. Confirm the exact payload and intended effect with the user before running.
