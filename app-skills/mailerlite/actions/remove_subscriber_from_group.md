# MailerLite · `remove_subscriber_from_group`

Unassign an existing MailerLite subscriber from a MailerLite group.

- **Service**: `mailerlite`
- **Action**: `remove_subscriber_from_group`
- **Action id**: `mailerlite.remove_subscriber_from_group`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailerlite" --action "remove_subscriber_from_group"
```

## Run

```bash
oo connector run "mailerlite" --action "remove_subscriber_from_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites MailerLite data. Always confirm the target and get explicit user approval before running.
