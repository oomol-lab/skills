# Mailchimp · `update_member`

Patch an existing Mailchimp member by subscriber hash or email address.

- **Service**: `mailchimp`
- **Action**: `update_member`
- **Action id**: `mailchimp.update_member`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailchimp" --action "update_member"
```

## Run

```bash
oo connector run "mailchimp" --action "update_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mailchimp state. Confirm the exact payload and intended effect with the user before running.
