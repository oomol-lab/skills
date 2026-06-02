# Mailgun · `get_domain_tracking_settings`

Get open, click, unsubscribe, and web scheme tracking settings for a domain.

- **Service**: `mailgun`
- **Action**: `get_domain_tracking_settings`
- **Action id**: `mailgun.get_domain_tracking_settings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailgun" --action "get_domain_tracking_settings"
```

## Run

```bash
oo connector run "mailgun" --action "get_domain_tracking_settings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
