# Mailgun · `update_domain_tracking_settings`

Update open, click, or unsubscribe tracking settings for a Mailgun domain.

- **Service**: `mailgun`
- **Action**: `update_domain_tracking_settings`
- **Action id**: `mailgun.update_domain_tracking_settings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailgun" --action "update_domain_tracking_settings"
```

## Run

```bash
oo connector run "mailgun" --action "update_domain_tracking_settings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mailgun state. Confirm the exact payload and intended effect with the user before running.
