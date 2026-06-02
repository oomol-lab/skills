# MailerLite · `update_subscriber`

Update an existing MailerLite subscriber by ID.

- **Service**: `mailerlite`
- **Action**: `update_subscriber`
- **Action id**: `mailerlite.update_subscriber`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailerlite" --action "update_subscriber"
```

## Run

```bash
oo connector run "mailerlite" --action "update_subscriber" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes MailerLite state. Confirm the exact payload and intended effect with the user before running.
