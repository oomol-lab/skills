# MailerLite · `delete_subscriber`

Delete a subscriber from the current MailerLite account.

- **Service**: `mailerlite`
- **Action**: `delete_subscriber`
- **Action id**: `mailerlite.delete_subscriber`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailerlite" --action "delete_subscriber"
```

## Run

```bash
oo connector run "mailerlite" --action "delete_subscriber" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites MailerLite data. Always confirm the target and get explicit user approval before running.
