# Mailchimp · `update_member_tags`

Add or remove Mailchimp member tags using the official tag-update endpoint.

- **Service**: `mailchimp`
- **Action**: `update_member_tags`
- **Action id**: `mailchimp.update_member_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailchimp" --action "update_member_tags"
```

## Run

```bash
oo connector run "mailchimp" --action "update_member_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mailchimp state. Confirm the exact payload and intended effect with the user before running.
