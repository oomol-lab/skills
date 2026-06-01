# MailerLite · `add_subscriber_to_group`

Assign an existing MailerLite subscriber to a MailerLite group.

- **Service**: `mailerlite`
- **Action**: `add_subscriber_to_group`
- **Action id**: `mailerlite.add_subscriber_to_group`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailerlite" --action "add_subscriber_to_group"
```

## Run

```bash
oo connector run "mailerlite" --action "add_subscriber_to_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes MailerLite state. Confirm the exact payload and intended effect with the user before running.
