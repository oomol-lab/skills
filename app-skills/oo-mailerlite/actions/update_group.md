# MailerLite · `update_group`

Update an existing MailerLite group by ID.

- **Service**: `mailerlite`
- **Action**: `update_group`
- **Action id**: `mailerlite.update_group`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailerlite" --action "update_group"
```

## Run

```bash
oo connector run "mailerlite" --action "update_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes MailerLite state. Confirm the exact payload and intended effect with the user before running.
