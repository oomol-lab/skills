# MailerLite · `upsert_subscriber`

Create or update a MailerLite subscriber using the official upsert endpoint.

- **Service**: `mailerlite`
- **Action**: `upsert_subscriber`
- **Action id**: `mailerlite.upsert_subscriber`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailerlite" --action "upsert_subscriber"
```

## Run

```bash
oo connector run "mailerlite" --action "upsert_subscriber" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes MailerLite state. Confirm the exact payload and intended effect with the user before running.
