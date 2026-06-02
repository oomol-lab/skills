# Gmail · `send_email`

Send an email from the connected Gmail account. At least one recipient and one of subject or body are required.

- **Service**: `gmail`
- **Action**: `send_email`
- **Action id**: `gmail.send_email`
- **Required scopes**: gmail.compose

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "send_email"
```

## Run

```bash
oo connector run "gmail" --action "send_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gmail state. Confirm the exact payload and intended effect with the user before running.
