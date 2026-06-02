# Mailchimp · `upsert_member`

Add or update a Mailchimp member using the official upsert endpoint.

- **Service**: `mailchimp`
- **Action**: `upsert_member`
- **Action id**: `mailchimp.upsert_member`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailchimp" --action "upsert_member"
```

## Run

```bash
oo connector run "mailchimp" --action "upsert_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mailchimp state. Confirm the exact payload and intended effect with the user before running.
